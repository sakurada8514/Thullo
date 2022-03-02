package com.example.backend.presentation.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public abstract class AbstractController {
    protected <T> ResponseEntity<T> responseEntity(T response) {
        return new ResponseEntity<T>(response, HttpStatus.OK);
    }
}
