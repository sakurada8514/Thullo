package com.example.backend.presentation.security.controller;

import javax.servlet.http.HttpServletRequest;

import com.example.backend.presentation.controller.AbstractController;

import org.springframework.security.web.csrf.DefaultCsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CsrfTokenController extends AbstractController {

    @GetMapping("/csrf-token")
    public String preLogin(HttpServletRequest request) {
        DefaultCsrfToken token = (DefaultCsrfToken) request.getAttribute("_csrf");
        if (token == null) {
            throw new RuntimeException("could not get a token.");
        }

        return token.getToken();
    }
}
