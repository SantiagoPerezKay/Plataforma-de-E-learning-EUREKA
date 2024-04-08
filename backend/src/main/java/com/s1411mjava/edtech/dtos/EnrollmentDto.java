package com.s1411mjava.edtech.dtos;

import lombok.Data;

@Data
public class EnrollmentDto {
    private Long id;
    private String creationDate;
    private Integer qualification;
    private CatalogDto course;
}
