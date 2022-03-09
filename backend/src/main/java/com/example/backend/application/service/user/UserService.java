package com.example.backend.application.service.user;

import com.example.backend.application.repository.user.UserRepository;
import com.example.backend.common.exception.RegisteredException;
import com.example.backend.domain.model.user.User;
import com.example.backend.presentation.view.response.SuccessResponse;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public SuccessResponse signUp(User user) throws RegisteredException {
        Boolean createResult = this.userRepository.creartUser(user);
        if (!createResult)
            throw new RegisteredException();
        return new SuccessResponse();
    }
}
