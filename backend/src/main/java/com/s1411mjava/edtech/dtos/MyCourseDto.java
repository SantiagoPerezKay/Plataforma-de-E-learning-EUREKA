package com.s1411mjava.edtech.dtos;

import com.s1411mjava.edtech.entity.*;
import com.s1411mjava.edtech.entity.Module;
import lombok.Data;
import lombok.Value;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * DTO for {@link Module}
 */
@Value
@Data
public class MyCourseDto implements Serializable {

    //Dto for Module
    Long id;
    String title;
    int position;
    List<ContentDto> contents;
    CourseDto course;

    /**
     * DTO for {@link Content}
     */
    @Value
    @Data
    public static class ContentDto implements Serializable {
        Long id;
        String title;
        int position;
        String url;
        String type;
        String description;
        List<ProgressDto> progress;

        /**
         * DTO for {@link Progress}
         */
        @Value
        @Data
        public static class ProgressDto implements Serializable {
            Long id;
            boolean completed;
            EnrollmentDto enrollment;

            /**
             * DTO for {@link Enrollment}
             */
            @Value
            @Data
            public static class EnrollmentDto implements Serializable {
                Long id;
                UserDto user;
                Date creationDate;
                Integer qualification;

                /**
                 * DTO for {@link User}
                 */
                @Value
                @Data
                public static class UserDto implements Serializable {
                    Long id;
                }
            }
        }
    }

    /**
     * DTO for {@link Course}
     */
    @Value
    @Data
    public static class CourseDto implements Serializable {
        Long id;
        String title;
        String description;
        String image;
        Float avgStars;
        Long categoryId;
        String categoryName;
    }
}