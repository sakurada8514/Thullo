package com.example.backend.infrastructure.datasource.user;

import com.example.backend.application.repository.user.UserRepository;
import com.example.backend.common.exception.RegisteredException;
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
        return this.userMapper.selectUserByEmail(email);
    }

    @Override
    public Boolean creartUser(User user) throws RegisteredException {
        return this.userMapper.insertUser(user);
    }
}
