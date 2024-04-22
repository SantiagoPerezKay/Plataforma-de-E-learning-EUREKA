package com.s1411mjava.edtech.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.io.Serializable;
import java.util.List;

/**
 * DTO for {@link com.s1411mjava.edtech.entity.Module}
 */
//@Value
@Data
@AllArgsConstructor
@NoArgsConstructor
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
    //@Value
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class CategoryDto implements Serializable {
        Long id;
        String name;
    }

    /**
     * DTO for {@link com.s1411mjava.edtech.entity.Module}
     */
    //@Value
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ModuleDto implements Serializable {
        Long id;
        String title;
        int position;
        List<ContentDto> contents;
    }
        //@Value
        @Data
        @AllArgsConstructor
        @NoArgsConstructor
        public static class ContentDto implements Serializable {
            Long id;
            String title;
            int position;
            String urlVideo;
            String urlPdf;

            String description;
            ProgressDto progress;
        }

            //@Value
            @Data
            @AllArgsConstructor
            @NoArgsConstructor
            public static class ProgressDto implements Serializable {
                Long id;
                boolean completed;

            }


    }
