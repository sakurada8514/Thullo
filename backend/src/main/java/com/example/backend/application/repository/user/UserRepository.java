package com.example.backend.application.repository.user;

import com.example.backend.domain.model.user.User;
import com.example.backend.support.exception.RegisteredException;

public interface UserRepository {
    User findByEmail(String email);

    Boolean creartUser(User user) throws RegisteredException;
}
