package com.s1411mjava.edtech.security.service.impl;


import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
@Component

public class JwtService {
    @Value("${JWT_SECRET}")
    private String jwtSecret;
    public String generateToken(UserDetails userDetails){
        Map<String,Object> claims= new HashMap<>();
        claims.put("role", userDetails.getAuthorities().stream().toList().get(0));
        return generateToken(userDetails.getUsername(),claims);
    }

    public String generateToken(String subject, Map<String, Object> claims) {
        return Jwts.builder()
                .claims(claims)
                .subject(subject)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 3600000))
                .signWith(getKey())
                .compact();
    }

    private Key getKey() {
        return Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }
}
