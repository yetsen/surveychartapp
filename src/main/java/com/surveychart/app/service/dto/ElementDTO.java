package com.surveychart.app.service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.surveychart.app.domain.Question;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class ElementDTO {

    private String type;
    private String name;
    private String title;
    private boolean hideNumber;
    @JsonProperty (value="isRequired")
    private boolean isRequired;
    List<ChoiceDTO> choices;

    ElementDTO(Question question) {

        this.type = question.getType().getValue();
        this.name = question.getName();
        this.title = question.getTitle();
        this.hideNumber = true;
        this.isRequired = true;
        this.choices = question.getChoices().stream().map(ChoiceDTO::new).collect(Collectors.toList());

    }

}
