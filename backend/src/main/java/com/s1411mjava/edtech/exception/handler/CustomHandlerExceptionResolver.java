package com.s1411mjava.edtech.exception.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.s1411mjava.edtech.exception.dto.ExceptionDto;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;

@Slf4j
public class CustomHandlerExceptionResolver implements HandlerExceptionResolver {

    private final ObjectMapper objectMapper = new ObjectMapper();
    @Override
    public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {

        response.setStatus(HttpStatus.FORBIDDEN.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);

        ExceptionDto errorResponse = new ExceptionDto(HttpStatus.FORBIDDEN.value(), ex.getMessage(), null);
        String jsonError = null;
        try {
            jsonError = objectMapper.writeValueAsString(errorResponse);
            response.getWriter().write(jsonError);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        log.info("Exception: " + ex.getMessage());
        return new ModelAndView();
    }
}
