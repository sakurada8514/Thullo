package com.example.backend.application.service.security;

import java.util.Objects;

import com.example.backend.application.repository.user.UserRepository;
import com.example.backend.domain.model.user.AuthdUser;
import com.example.backend.domain.model.user.User;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("SecurityService")
public class SecurityService implements UserDetailsService {

    private final UserRepository userRepository;

    public SecurityService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = this.userRepository.findByEmail(email);

        if (Objects.isNull(user))
            throw new UsernameNotFoundException("user not found");

        return new AuthdUser(user);
    }
}
