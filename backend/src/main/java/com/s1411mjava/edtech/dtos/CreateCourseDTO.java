package com.s1411mjava.edtech.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;

@Data
@Getter
public class CreateCourseDTO {

    @Size(min = 2, max = 50, message = "El titulo del curso requiere entre 2 y 50 caracteres")
    @NotBlank(message = "El curso requiere un titulo")
    private String title;

    @Size(min = 2, max = 1000, message = "La descripción del curso requiere entre 2 y 1000 caracteres")
    @NotBlank(message = "El curso requiere una descripción")
    private String description;

    @NotBlank(message = "El curso requiere una imagen")
    private String image;

    @NotNull(message = "El curso requiere una categoría")
    private Long categoryId;

    @NotNull(message = "El curso requiere un módulo")
    @NotNull.List(value = {})
    private List<CreateCourseModuleDTO> modules;

}
