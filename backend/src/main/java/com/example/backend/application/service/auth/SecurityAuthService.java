package com.example.backend.application.service.auth;

import java.util.Objects;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.example.backend.application.repository.user.UserRepository;
import com.example.backend.common.exception.RegisteredException;
import com.example.backend.domain.model.user.AuthdUser;
import com.example.backend.domain.model.user.User;
import com.example.backend.presentation.view.response.SuccessResponse;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("SecurityAuthService")
public class SecurityAuthService implements UserDetailsService {

    private final UserRepository userRepository;
    private final AuthenticationProvider authenticationProvider;

    public SecurityAuthService(UserRepository userRepository, AuthenticationProvider authenticationProvider) {
        this.userRepository = userRepository;
        this.authenticationProvider = authenticationProvider;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = this.userRepository.findByEmail(email);

        if (Objects.isNull(user))
            throw new UsernameNotFoundException("user not found");

        return new AuthdUser(user);
    }

    @Transactional
    public SuccessResponse signUp(HttpServletRequest request, User user)
            throws RegisteredException, Exception {
        Boolean createResult = this.userRepository.creartUser(user);
        if (!createResult)
            throw new RegisteredException();

        try {
            return this.authenticate(request, user);
        } catch (AuthenticationException e) {
            SecurityContextHolder.getContext().setAuthentication(null);
            throw new Exception();
        }
    }

    private SuccessResponse authenticate(HttpServletRequest request, User user) {
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                user.email(),
                user.password(),
                AuthorityUtils.createAuthorityList("ROLE_USER"));

        token.setDetails(new WebAuthenticationDetails(request));
        Authentication authentication = this.authenticationProvider.authenticate(token);

        SecurityContext sc = SecurityContextHolder.getContext();
        sc.setAuthentication(authentication);
        HttpSession session = request.getSession(true);
        session.setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, sc);
        return new SuccessResponse();
    }
}
