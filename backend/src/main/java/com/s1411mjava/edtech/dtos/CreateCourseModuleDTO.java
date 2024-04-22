package com.s1411mjava.edtech.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Data
@Getter
public class CreateCourseModuleDTO {

    @NotNull
    @Size(min = 2, max = 50, message = "El titulo del módulo requiere entre 2 y 50 caracteres")
    @NotBlank(message = "El módulo requiere un título")
    private String title;

    @NotNull(message = "El módulo requiere una posición")
    private int position;

    @NotNull(message = "El módulo requiere un contenido")
    private List<CreateCourseContentDTO> contents;
}
