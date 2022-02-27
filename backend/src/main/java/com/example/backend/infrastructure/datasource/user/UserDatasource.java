package com.example.backend.infrastructure.datasource.user;

import com.example.backend.application.service.user.UserRepository;
import com.example.backend.domain.model.user.User;

import org.springframework.stereotype.Repository;

@Repository
public class UserDatasource implements UserRepository {
    private final UserMapper userMapper;

    public UserDatasource(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public User findByEmail(String email) {
        return userMapper.selectUserByEmail(email);
    }
}
