package com.surveychart.app.service.dto;

import com.surveychart.app.domain.Choice;
import com.surveychart.app.domain.Question;
import lombok.Data;

@Data
public class ChoiceDTO {

    private String value;
    private String text;

    ChoiceDTO(Choice choice) {
        this.value = choice.getValue();
        this.text = choice.getText();
    }

    ChoiceDTO(Question question) {
        this.text = question.getTitle();
        this.value = question.getName();
    }
}
