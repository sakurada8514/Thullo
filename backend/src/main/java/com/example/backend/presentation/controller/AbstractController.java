package com.example.backend.presentation.controller;

import com.example.backend.presentation.view.response.ErrorResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public abstract class AbstractController {
    protected <T> ResponseEntity<T> successResponseEntity(T response) {
        return new ResponseEntity<T>(response, HttpStatus.OK);
    }

    protected ResponseEntity<ErrorResponse> errorResponseEntity(
            String errorCode,
            String errorMessage,
            HttpStatus status) {
        return new ResponseEntity<ErrorResponse>(new ErrorResponse(errorCode, errorMessage), status);
    }
}
