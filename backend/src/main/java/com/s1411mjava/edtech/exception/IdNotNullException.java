package com.s1411mjava.edtech.exception;

public class IdNotNullException extends RuntimeException {
    public static final String ID_NOT_NULL_TEXT = "The ID cannot be null";

    public IdNotNullException() {
        super(ID_NOT_NULL_TEXT);
    }
}
