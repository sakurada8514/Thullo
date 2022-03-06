package com.example.backend.domain.model.user;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class Password {
    private String value;

    public Password(String password) {
        this.value = password;
    }

    public String value() {
        return this.value;
    }

    public String encode() {
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder.encode(this.value);
    }
}
