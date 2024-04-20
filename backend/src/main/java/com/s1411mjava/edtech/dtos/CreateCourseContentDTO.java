package com.s1411mjava.edtech.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class CreateCourseContentDTO {
    @Size(min = 2, max = 50, message = "El titulo del contenido requiere entre 2 y 50 caracteres")
    @NotBlank(message = "El contenido requiere un título")
    private String title;

    @Size(min = 2, max = 1000, message = "La descripción del contenido requiere entre 2 y 1000 caracteres")
    @NotBlank(message = "El contenido requiere una descripción")
    private String description;

    @NotNull(message = "El contenido requiere una posición")
    private int position;

    @NotNull
    @NotBlank(message = "El contenido requiere una URL de video")
    private String urlVideo;
    private String urlPdf;
}
