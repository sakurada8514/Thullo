package com.example.backend.presentation.controller.user;

import java.util.Objects;

import com.example.backend.common.constant.Error;
import com.example.backend.domain.model.user.AuthdUser;
import com.example.backend.presentation.controller.AbstractController;
import com.example.backend.presentation.view.response.user.UserResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController extends AbstractController {

    @GetMapping("/authd")
    public ResponseEntity<?> authdUser(@AuthenticationPrincipal AuthdUser authdUser) {
        if (Objects.isNull(authdUser)) {
            return this.errorResponseEntity(
                    Error.UNAUTHORIZED.code(),
                    Error.UNAUTHORIZED.message(),
                    HttpStatus.UNAUTHORIZED);
        }

        return this.successResponseEntity(UserResponse.fromUser(authdUser.user()));
    }
}
