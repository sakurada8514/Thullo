package com.example.backend.presentation.security;

import java.util.Objects;

import com.example.backend.application.service.user.UserRepository;
import com.example.backend.domain.model.user.SignInUser;
import com.example.backend.domain.model.user.User;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("SecurityUserDetailsService")
public class SecurityUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    public SecurityUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(final String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);

        if (Objects.isNull(user))
            throw new UsernameNotFoundException("user not found");

        return new SignInUser(user);
    }
}
