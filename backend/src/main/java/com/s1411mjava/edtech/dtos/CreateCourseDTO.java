package com.s1411mjava.edtech.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Data
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
    private ModuleDTO[] modules;


    @Data
    public static class ModuleDTO {

        @Size(min = 2, max = 50, message = "El titulo del módulo requiere entre 2 y 50 caracteres")
        @NotBlank(message = "El módulo requiere un título")
        private String title;

        @NotNull(message = "El módulo requiere una posición")
        private int position;

        @NotNull(message = "El módulo requiere un contenido")
        private ContentDTO[] contents;
    }

    @Data
    public static class ContentDTO {

        @Size(min = 2, max = 50, message = "El titulo del contenido requiere entre 2 y 50 caracteres")
        @NotBlank(message = "El contenido requiere un título")
        private String title;

        @Size(min = 2, max = 1000, message = "La descripción del contenido requiere entre 2 y 1000 caracteres")
        @NotBlank(message = "El contenido requiere una descripción")
        private String description;

        @NotNull(message = "El contenido requiere una posición")
        private int position;

        @NotBlank(message = "El contenido requiere una URL de video")
        private String urlVideo;
        private String urlPdf;
    }
}
