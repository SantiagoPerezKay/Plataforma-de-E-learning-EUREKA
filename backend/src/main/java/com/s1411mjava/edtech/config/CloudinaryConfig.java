package com.s1411mjava.edtech.config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {
    @Value("${CLOUDINARY_NAME}")
    private String name;

    @Value("${CLOUDINARY_API_KEY}")
    private String key;

    @Value("${CLOUDINARY_API_SECRET}")
    private String secret;

    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", this.name,
                "api_key", this.key,
                "api_secret", this.secret,
                "secure", true
                ));
    }
}
