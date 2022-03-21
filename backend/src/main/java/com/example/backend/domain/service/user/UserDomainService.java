package com.example.backend.domain.service.user;

import java.util.Objects;

import com.example.backend.application.repository.user.UserRepository;
import com.example.backend.domain.model.user.User;

import org.springframework.stereotype.Service;

@Service
public class UserDomainService {
    private final UserRepository userRepository;

    public UserDomainService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean exists(String email) {
        User user = userRepository.findByEmail(email);

        return !Objects.isNull(user);
    }
}
