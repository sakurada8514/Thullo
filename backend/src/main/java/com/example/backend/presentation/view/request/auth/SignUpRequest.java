package com.example.backend.presentation.view.request.auth;

import com.example.backend.domain.model.user.User;

import lombok.Setter;

@Setter
public class SignUpRequest {
    private String name;
    private String email;
    private String password;

    public User toUser() {
        return new User(this.name, this.email, this.password);
    }
}
