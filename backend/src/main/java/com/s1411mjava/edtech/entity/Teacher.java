package com.s1411mjava.edtech.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "teachers")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String experience;
    @Column(nullable = false)
    private String credentials;
    @Column(nullable = false)
    private String info;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(insertable = false, updatable=false)
    private Long user_id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "teacher")
    private List<Course> courses;


    }


