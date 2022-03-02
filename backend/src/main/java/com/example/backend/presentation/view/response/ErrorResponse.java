package com.example.backend.presentation.view.response;

import lombok.Getter;

@Getter
public class ErrorResponse {
    Boolean success = false;
    String errorCode;
    String message;

    public ErrorResponse(String errorCode, String message) {
        this.errorCode = errorCode;
        this.message = message;
    }
}
