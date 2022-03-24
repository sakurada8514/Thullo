package com.example.backend.application.service.user;

import com.example.backend.application.repository.user.UserRepository;
import com.example.backend.domain.model.user.User;
import com.example.backend.domain.service.user.UserDomainService;
import com.example.backend.presentation.view.response.SuccessResponse;
import com.example.backend.support.exception.RegisteredException;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserDomainService userDomainService;

    public UserService(UserRepository userRepository, UserDomainService userDomainService) {
        this.userRepository = userRepository;
        this.userDomainService = userDomainService;
    }

    public SuccessResponse signUp(User user) throws RegisteredException {
        if (userDomainService.exists(user.email()))
            throw new RegisteredException();

        this.userRepository.creartUser(user);
        return new SuccessResponse();
    }
}
