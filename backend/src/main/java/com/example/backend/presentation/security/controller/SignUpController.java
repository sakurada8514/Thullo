package com.example.backend.presentation.security.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.example.backend.presentation.controller.AbstractController;
import com.example.backend.presentation.security.service.SecurityUserDetailsService;
import com.example.backend.presentation.view.request.auth.SignUpRequest;
import com.example.backend.presentation.view.response.SuccessResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignUpController extends AbstractController {
    private final SecurityUserDetailsService securityUserDetailsService;

    public SignUpController(SecurityUserDetailsService securityUserDetailsService) {
        this.securityUserDetailsService = securityUserDetailsService;
    }

    @PostMapping("signup")
    public ResponseEntity<SuccessResponse> signUp(@RequestBody SignUpRequest request,
            HttpServletRequest httpServletRequest,
            HttpServletResponse response) throws Exception {
        return responseEntity(
                this.securityUserDetailsService.signUp(httpServletRequest, response, request.toUser()));
    }
}
