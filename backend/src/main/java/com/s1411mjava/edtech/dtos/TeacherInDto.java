package com.s1411mjava.edtech.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
    @Data
    public class TeacherInDto {
        @NotNull
        @NotBlank
        private String experience;
        @NotNull
        @NotBlank
        private String credentials;
        @NotNull
        @NotBlank
        private String linkedin;
        @NotNull
        @NotBlank
        private String file;


    }

