package com.s1411mjava.edtech.dtos;
import lombok.Data;

@Data
public class ModuleDto {
    private Long id;
    private String title;
    private int position;
    private Long course_id;

}

