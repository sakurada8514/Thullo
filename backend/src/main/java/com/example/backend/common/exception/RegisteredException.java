package com.example.backend.common.exception;

import com.example.backend.common.constant.Error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class RegisteredException extends RuntimeException {
    public RegisteredException() {
        super(Error.REGISTERED.message());
    }
}
