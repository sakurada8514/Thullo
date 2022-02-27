package com.example.backend.application.service.user;

import com.example.backend.domain.model.user.User;

public interface UserRepository {
    User findByEmail(String email);
}
