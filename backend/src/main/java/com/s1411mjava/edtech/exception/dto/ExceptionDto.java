package com.s1411mjava.edtech.exception.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Map;

@Data
@AllArgsConstructor
public class ExceptionDto {
    int statusCode;
    String message;
    Map<String, String> detail;
}
