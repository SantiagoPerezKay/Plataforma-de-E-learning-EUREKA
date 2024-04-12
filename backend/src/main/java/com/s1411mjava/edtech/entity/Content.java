package com.s1411mjava.edtech.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "contents")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Content {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private int position;
    @Column(name = "url_video", nullable = false)
    private String urlVideo;
    @Column(name = "url_pdf")
    private String urlPdf;

    @Lob
    @Column(nullable = false)
    private String description;


    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "module_id")
    private Module module;

    @OneToMany(mappedBy = "content")
    private List<Progress> progress;





}
