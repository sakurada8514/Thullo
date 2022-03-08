package com.example.backend.domain.model.user;

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

}
