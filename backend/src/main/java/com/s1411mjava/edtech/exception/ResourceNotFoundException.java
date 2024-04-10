package com.s1411mjava.edtech.exception;

public class ResourceNotFoundException extends RuntimeException {

    public static final String COURSE_NOT_FOUND_TEXT = "Course not found.";
    public ResourceNotFoundException(String courseNotFound) {
        super(COURSE_NOT_FOUND_TEXT + courseNotFound);
    }
}
