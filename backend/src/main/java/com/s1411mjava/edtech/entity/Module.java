package com.s1411mjava.edtech.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "modules")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Module {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private int position;


    @OneToMany(mappedBy = "module")
    private List<Content> contents;
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;
}
