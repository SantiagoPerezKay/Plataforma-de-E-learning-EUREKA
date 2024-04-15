package com.s1411mjava.edtech.exception.handler;

import com.s1411mjava.edtech.exception.*;
import com.s1411mjava.edtech.exception.dto.ExceptionDto;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestControllerAdvice(annotations = RestController.class)
public class ExceptionHandling {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionDto handleValidException(MethodArgumentNotValidException ex){
        List<FieldError> errors = ex.getBindingResult().getFieldErrors();
        Map<String, String> detail = new HashMap<>();

        errors.forEach(error -> detail.put(error.getField(), error.getDefaultMessage()));

        return new ExceptionDto(HttpStatus.BAD_REQUEST.value(), "Validations", detail);
    }

    @ExceptionHandler(BadCredentialsException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ExceptionDto handleUnauthorizedException(BadCredentialsException ex){
        return new ExceptionDto(
                HttpStatus.UNAUTHORIZED.value(),
                ex.getMessage(),
                null
        );
    }

    @ExceptionHandler(AccessDeniedException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ExceptionDto handleAccessDeniedException(AccessDeniedException ex){
        Map<String, String> detail = new HashMap<>();
        detail.put("reason", ex.getMessage());

        return new ExceptionDto(
                HttpStatus.FORBIDDEN.value(),
                "You do not have permission to access this resource.",
                detail
        );
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ExceptionDto handleDataIntegrityViolationException(DataIntegrityViolationException ex){
        return new ExceptionDto(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                "Database data integrity error.",
                null
        );
    }

    @ExceptionHandler(RoleNameNotValidException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionDto handleRoleNameNotValidException(RoleNameNotValidException ex){
        return new ExceptionDto(
                HttpStatus.BAD_REQUEST.value(),
                ex.getMessage(),
                null
        );
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionDto handleUsernameNotFoundException(UsernameNotFoundException ex){
        return new ExceptionDto(
                HttpStatus.BAD_REQUEST.value(),
                ex.getMessage(),
                null
        );
    }

    @ExceptionHandler
    @ResponseBody
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ExceptionDto handleRuntimeException(RuntimeException ex){
        Map<String, String> detail = new HashMap<>();
        detail.put("Class", ex.getClass().getName());

        return new ExceptionDto(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                ex.getMessage(),
                detail
        );
    }

    @ExceptionHandler(DuplicatedResourceException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionDto handleDuplicatedException(DuplicatedResourceException ex){
        return new ExceptionDto(
                HttpStatus.BAD_REQUEST.value(),
                ex.getMessage(),
                null
        );
    }

    @ExceptionHandler(StudentNotFoundException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionDto handleStudentNotFoundException(StudentNotFoundException ex){
        return new ExceptionDto(
                HttpStatus.BAD_REQUEST.value(),
                ex.getMessage(),
                null
        );
    }

    @ExceptionHandler(IdLessThanOneException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionDto handleIdLessThanOneException(IdLessThanOneException ex){
        return new ExceptionDto(
                HttpStatus.BAD_REQUEST.value(),
                ex.getMessage(),
                null
        );
    }

    @ExceptionHandler(IdNotNullException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionDto handleIdNotNullException(IdNotNullException ex){
        return new ExceptionDto(
                HttpStatus.BAD_REQUEST.value(),
                ex.getMessage(),
                null
        );
    }

    @ExceptionHandler(ProgressNotFoundException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionDto handleProgressNotFoundException(ProgressNotFoundException ex){
        return new ExceptionDto(
                HttpStatus.BAD_REQUEST.value(),
                ex.getMessage(),
                null
        );
    }

    @ExceptionHandler(InvalidValueException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionDto handleInvalidValueException(InvalidValueException ex){
        return new ExceptionDto(
                HttpStatus.BAD_REQUEST.value(),
                ex.getMessage(),
                null
        );
    }
    @ExceptionHandler(AlreadyEnrolledException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionDto handleAlreadyEnrolledException(AlreadyEnrolledException ex){
        return new ExceptionDto(
                HttpStatus.BAD_REQUEST.value(),
                ex.getMessage(),
                null
        );
    }

    @ExceptionHandler(NotEnrolledException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionDto handleNotEnrolledException(NotEnrolledException ex){
        return new ExceptionDto(
                HttpStatus.BAD_REQUEST.value(),
                ex.getMessage(),
                null
        );
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionDto handleResourceNotFoundException(ResourceNotFoundException ex){
        return new ExceptionDto(
                HttpStatus.BAD_REQUEST.value(),
                ex.getMessage(),
                null
        );
    }
}
