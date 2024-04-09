package com.s1411mjava.edtech.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "progresses")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Progress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Long content_id;
    @Column(nullable = false)
    private boolean completed;
    @Column(nullable = false)
    private Long student_id;

    @OneToOne
    @JoinColumn(name = "content_id")
    private Content content;
    @ManyToOne
    @JoinColumn(name = "enrollment_id")
    private Enrollment enrollment;

}

