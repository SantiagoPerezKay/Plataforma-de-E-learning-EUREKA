package com.s1411mjava.edtech.dtos;

import lombok.Data;

@Data
public class CreatedCourseDTO {

    private Long id;

    private String title;

    private String description;

    private String image;

    private CreatedCourseDTO.CategoryDTO category;

    private CreatedCourseDTO.ModuleDTO[] modules;


    @Data
    public static class CategoryDTO {

        private Long id;

        private String name;
    }

    @Data
    public static class ModuleDTO {

        private Long id;

        private String title;

        private int position;

        private CreatedCourseDTO.ContentDTO[] contents;
    }

    @Data
    public static class ContentDTO {

        private Long id;

        private String title;

        private String description;

        private int position;

        private String urlVideo;

        private String urlPdf;
    }
}
