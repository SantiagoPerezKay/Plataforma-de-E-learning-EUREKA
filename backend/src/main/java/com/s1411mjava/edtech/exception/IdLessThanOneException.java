package com.s1411mjava.edtech.exception;

public class IdLessThanOneException extends RuntimeException {
    public static final String ID_LESS_THAN_ONE_TEXT = "The ID can not be less than 1";

    public IdLessThanOneException() {
        super(ID_LESS_THAN_ONE_TEXT);
    }
}
