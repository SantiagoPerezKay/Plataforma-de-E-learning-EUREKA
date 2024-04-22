package com.s1411mjava.edtech.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.s1411mjava.edtech.dtos.FileDto;
import com.s1411mjava.edtech.exception.InvalidValueException;
import com.s1411mjava.edtech.exception.UploadFileException;
import com.s1411mjava.edtech.service.CloudinaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class CloudinaryServiceImpl implements CloudinaryService {
    private final Cloudinary cloudinary;

    @Override
    public FileDto save(MultipartFile file) throws IOException {
        this.validFile(file);

        try {
            String url = this.cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap()).get("secure_url").toString();
            return new FileDto(url);
        }catch (Exception ex){
            throw new UploadFileException("Error while loading file: " + ex.getMessage());
        }
    }

    private void validFile(MultipartFile file){
        if(file == null){
            throw new InvalidValueException("The file must not be null");
        }

        if(file.isEmpty()){
            throw new InvalidValueException("The file must not be empty");
        }
    }
}
