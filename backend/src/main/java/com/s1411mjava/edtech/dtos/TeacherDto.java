package com.s1411mjava.edtech.dtos;

import jakarta.persistence.Column;
import lombok.Data;
@Data
public class TeacherDto {
    private Long id;
    private String experience;
    private String credentials;
    private Long user_id;
    private String linkedin;
    private String file;



}
