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
@Table (name = "question")
@Getter
@Setter
public class Question extends AbstractAuditingEntity implements Serializable {

    @Id
    @GeneratedValue (strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Size (max = 255)
    @Column(name = "name")
    private String name;

    @Size (max = 4000)
    @Column(name = "title", length = 4000)
    private String title;

    @JsonIgnore
    @OneToMany
    @JoinTable(
        name = "question_choice",
        joinColumns = {@JoinColumn(name = "choice_id", referencedColumnName = "id")},
        inverseJoinColumns = {@JoinColumn(name = "question_id", referencedColumnName = "id")})
    private Set<Choice> choices = new HashSet<>();


}
