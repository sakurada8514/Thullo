package com.example.backend.presentation.controller;

import com.example.backend.presentation.view.response.ErrorResponse;
import com.example.backend.support.constant.Error;
import com.example.backend.support.exception.RegisteredException;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.http.HttpStatus;

@RestControllerAdvice
public class ErrorHandlerController {

    @ExceptionHandler({ RegisteredException.class })
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleException(RegisteredException e) {
        return new ErrorResponse(Error.REGISTERED.code(), e.getMessage());
    }
}
