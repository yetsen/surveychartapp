package com.surveychart.app.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table (name = "block")
@Getter
@Setter
public class Block extends AbstractAuditingEntity implements Serializable {

    @Id
    @GeneratedValue (strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Size (max = 255)
    @Column(name = "name")
    private String name;

    @Size (max = 255)
    @Column(name = "title")
    private String title;

    @Size (max = 4000)
    @Column(name = "description", length = 4000)
    private String description;

    @JsonIgnore
    @OneToMany
    @JoinTable(
        name = "block_question",
        joinColumns = {@JoinColumn(name = "question_id", referencedColumnName = "id")},
        inverseJoinColumns = {@JoinColumn(name = "block_id", referencedColumnName = "id")})
    private Set<Question> questions = new HashSet<>();

}
