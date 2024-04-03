package com.s1411mjava.edtech.dtos;

import lombok.Data;

@Data
public class TokenDto {
    private String token;

    public TokenDto(String generateToken) {
        this.token= generateToken;
    }
}
