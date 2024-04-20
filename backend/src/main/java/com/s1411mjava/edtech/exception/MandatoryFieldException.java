package com.s1411mjava.edtech.exception;

import lombok.Getter;
import org.springframework.validation.BindingResult;

@Getter
public class MandatoryFieldException extends RuntimeException{

    private final BindingResult errors;
    public MandatoryFieldException(String message, BindingResult errors) {
        super(message);
        this.errors = errors;
    }

}
