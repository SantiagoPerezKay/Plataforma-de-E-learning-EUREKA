package com.s1411mjava.edtech.exception;

public class StudentNotFoundException extends RuntimeException {
    public static final String STUDENT_NOT_FOUND_TEXT = "Not exists student with ID: ";
    public StudentNotFoundException(String id) {
        super(STUDENT_NOT_FOUND_TEXT + id);
    }
}
