package com.example.backend.domain.model.user;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class User {
    Long id;
    String email;
    String name;
    String password;

    public String name() {
        return this.name;
    }

    public String password() {
        return this.password;
    }

    public Long id() {
        return this.id;
    }

    public String email() {
        return this.email;
    }

    public User() {
    }

    public User(String name, String email, String password) {
        this.email = email;
        this.name = name;
        this.password = (new BCryptPasswordEncoder()).encode(password);
    }

}
