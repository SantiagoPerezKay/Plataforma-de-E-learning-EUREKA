package com.s1411mjava.edtech.dtos;

import lombok.Data;

@Data
public class ProgressDto {
    private Long id;
    private Long content_id;
    private boolean completed;
    private Long student_id;
}
