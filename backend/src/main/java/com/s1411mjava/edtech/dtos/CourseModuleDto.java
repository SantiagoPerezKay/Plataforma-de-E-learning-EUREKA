package com.s1411mjava.edtech.dtos;

import lombok.Data;
import lombok.Value;

import java.io.Serializable;
import java.util.List;

/**
 * DTO for {@link com.s1411mjava.edtech.entity.Module}
 */
@Value
@Data
public class CourseModuleDto implements Serializable {
    Long id;
    String title;
    String description;
    String image;
    Float avgStars;
    CategoryDto category;
    List<ModuleDto> modules;

    /**
     * DTO for {@link com.s1411mjava.edtech.entity.Category}
     */
    @Value
    @Data
    public static class CategoryDto implements Serializable {
        Long id;
        String name;
    }

    /**
     * DTO for {@link com.s1411mjava.edtech.entity.Module}
     */
    @Value
    @Data
    public static class ModuleDto implements Serializable {
        Long id;
        String title;
        int position;
        List<ContentDto> contents;
    }
        @Value
        @Data
        public static class ContentDto implements Serializable {
            Long id;
            String title;
            int position;
            String urlVideo;
            String urlPdf;

            String description;
            ProgressDto progress;
        }

            @Value
            @Data
            public static class ProgressDto implements Serializable {
                Long id;
                boolean completed;

            }


    }
