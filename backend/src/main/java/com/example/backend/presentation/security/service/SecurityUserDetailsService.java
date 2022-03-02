package com.example.backend.presentation.security.service;

import java.util.Objects;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.backend.application.repository.user.UserRepository;
import com.example.backend.common.exception.RegisteredException;
import com.example.backend.domain.model.user.SignInUser;
import com.example.backend.domain.model.user.User;
import com.example.backend.presentation.view.response.SuccessResponse;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("SecurityUserDetailsService")
public class SecurityUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;
    private final AuthenticationProvider authenticationProvider;

    public SecurityUserDetailsService(UserRepository userRepository, AuthenticationProvider authenticationProvider) {
        this.userRepository = userRepository;
        this.authenticationProvider = authenticationProvider;
    }

    @Override
    public UserDetails loadUserByUsername(final String email) throws UsernameNotFoundException {
        User user = this.userRepository.findByEmail(email);

        if (Objects.isNull(user))
            throw new UsernameNotFoundException("user not found");

        return new SignInUser(user);
    }

    @Transactional
    public SuccessResponse signUp(HttpServletRequest request, HttpServletResponse response, User user)
            throws RegisteredException, Exception {
        Boolean createResult = this.userRepository.creartUser(user);
        if (!createResult)
            throw new RegisteredException();

        try {
            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                    user.email(),
                    user.password(),
                    AuthorityUtils.createAuthorityList("ROLE_USER"));

            token.setDetails(new WebAuthenticationDetails(request));
            Authentication authentication = this.authenticationProvider.authenticate(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return new SuccessResponse();
        } catch (AuthenticationException e) {
            SecurityContextHolder.getContext().setAuthentication(null);
            throw new Exception();
        }
    }
}
