package com.s1411mjava.edtech.service;

import com.s1411mjava.edtech.dtos.FileDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface CloudinaryService {
    FileDto save(MultipartFile file) throws IOException;
}