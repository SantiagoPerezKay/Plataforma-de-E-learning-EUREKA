package com.s1411mjava.edtech.exception;

public class ResourceNotFoundException extends RuntimeException {

    public static final String RESOURCE_NOT_FOUND_TEXT = "Resource not found. ";
    public ResourceNotFoundException(String resourceNotFound) {
        super(RESOURCE_NOT_FOUND_TEXT + resourceNotFound);
    }
}
