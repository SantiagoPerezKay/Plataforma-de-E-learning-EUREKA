package com.s1411mjava.edtech.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "courses")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Lob
    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String image;

    @Column(name = "avg_stars")
    private Float avgStars;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(mappedBy = "course")
    private List<Module> modules;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    // TODO: add teacher
}
