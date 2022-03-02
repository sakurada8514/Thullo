package com.example.backend.common.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class RegisteredException extends RuntimeException {
    public RegisteredException() {
        super("既に登録済みのアカウントです");
    }
}
