package com.example.backend.presentation.view.response.user;

import com.example.backend.domain.model.user.User;

import lombok.Getter;

@Getter
public class UserResponse {
    private Long id;
    private String name;

    public UserResponse(User user) {
        this.id = user.getId();
        this.name = user.getName();
    }

    public static UserResponse fromUser(User user) {
        return new UserResponse(user);
    }
}
