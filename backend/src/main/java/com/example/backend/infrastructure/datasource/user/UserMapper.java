package com.example.backend.infrastructure.datasource.user;

import com.example.backend.domain.model.user.User;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    User selectUserByEmail(String email);
}
