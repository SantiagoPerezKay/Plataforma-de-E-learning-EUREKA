package com.s1411mjava.edtech.dtos;

import lombok.Data;

@Data
public class ContentDto {
    private Long id;
    private String title;
    private int position;
    private String url;
    private String type;
    private Long module_id;
    private String description;

}

