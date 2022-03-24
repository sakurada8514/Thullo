package com.example.backend.support.exception;

import com.example.backend.support.constant.Error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class RegisteredException extends RuntimeException {
    public RegisteredException() {
        super(Error.REGISTERED.message());
    }
}
