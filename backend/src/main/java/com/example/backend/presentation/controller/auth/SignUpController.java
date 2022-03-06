package com.example.backend.presentation.controller.auth;

import javax.servlet.http.HttpServletRequest;

import com.example.backend.application.service.auth.SecurityAuthService;
import com.example.backend.presentation.controller.AbstractController;
import com.example.backend.presentation.view.request.auth.SignUpRequest;
import com.example.backend.presentation.view.response.SuccessResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignUpController extends AbstractController {
    private final SecurityAuthService securityAuthService;

    public SignUpController(SecurityAuthService securityAuthService) {
        this.securityAuthService = securityAuthService;
    }

    @PostMapping("signup")
    public ResponseEntity<SuccessResponse> signUp(
            @RequestBody SignUpRequest request,
            HttpServletRequest httpServletRequest) throws Exception {
        return successResponseEntity(
                this.securityAuthService.signUp(httpServletRequest, request.toUser()));
    }
}
