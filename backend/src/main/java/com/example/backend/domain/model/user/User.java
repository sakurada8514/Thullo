package com.example.backend.domain.model.user;

import lombok.Getter;

@Getter
public class User {
    Long id;
    String email;
    String name;
    String password;

    public User() {
    }

    public User(String name, String email, String password) {
        this.email = email;
        this.name = name;
        this.password = (new Password(password)).encode();
    }
}
