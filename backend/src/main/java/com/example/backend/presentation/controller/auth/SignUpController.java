package com.example.backend.presentation.controller.auth;

import javax.servlet.http.HttpSession;

import com.example.backend.domain.model.user.User;
import com.example.backend.infrastructure.datasource.user.UserMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignUpController {

    @Autowired
    HttpSession httpSession;

    @Autowired
    UserMapper userMapper;

    @PostMapping("signup")
    public void signUp() {
        User u = userMapper.selectUserByEmail("test");
        return;
    }
}
