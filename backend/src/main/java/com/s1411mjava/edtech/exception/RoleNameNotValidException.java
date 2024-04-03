package com.s1411mjava.edtech.exception;

public class RoleNameNotValidException extends RuntimeException {
    public static final String ROLE_NAME_NOT_VALID_TEXT = "Valid role names: STUDENT and TEACHER.";

    public RoleNameNotValidException() {
        super(ROLE_NAME_NOT_VALID_TEXT);
    }
}
