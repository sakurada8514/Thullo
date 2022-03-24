package com.example.backend.presentation.security.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.backend.presentation.view.response.ErrorResponse;
import com.example.backend.support.constant.Error;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

public class AuthenticationEntryPointHandlerImpl implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request,
            HttpServletResponse response,
            AuthenticationException exception) throws IOException, ServletException {
        if (response.isCommitted()) {
            return;
        }
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(HttpStatus.FORBIDDEN.value());

        final ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(
                response.getOutputStream(),
                new ErrorResponse(Error.FORBIDDEN.code(), Error.FORBIDDEN.message()));
    }
}
