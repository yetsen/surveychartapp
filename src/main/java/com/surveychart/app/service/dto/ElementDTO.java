package com.surveychart.app.service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.surveychart.app.domain.Question;
import com.surveychart.app.enums.QuestionType;
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
    List<ChoiceDTO> columns;
    List<ChoiceDTO> rows;

    ElementDTO(Question question) {

        this.type = question.getType().getValue();
        this.name = question.getName();
        this.title = question.getTitle();
        this.hideNumber = true;
        this.isRequired = true;
        if (!QuestionType.SUB_MATRIX.equals(question.getType())
            && !QuestionType.MATRIX.equals(question.getType())) {
            this.choices = question.getChoices().stream().map(ChoiceDTO::new).collect(Collectors.toList());
        } else if (QuestionType.MATRIX.equals(question.getType())) {
            this.columns = question.getChoices().stream().map(ChoiceDTO::new).collect(Collectors.toList());
            this.rows = question.getChildren().stream().map(ChoiceDTO::new).collect(Collectors.toList());
        }

    }

}
