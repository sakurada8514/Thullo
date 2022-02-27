package com.example.backend.domain.model.user;

public class User {
    Long id;
    String email;
    String name;
    String password;

    public String name() {
        return name;
    }

    public String password() {
        return password;
    }

    public Long id() {
        return id;
    }

}
