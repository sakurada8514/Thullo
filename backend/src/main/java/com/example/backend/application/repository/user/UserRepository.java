package com.example.backend.application.repository.user;

import com.example.backend.common.exception.RegisteredException;
import com.example.backend.domain.model.user.User;

public interface UserRepository {
    User findByEmail(String email);

    Boolean creartUser(User user) throws RegisteredException;
}
