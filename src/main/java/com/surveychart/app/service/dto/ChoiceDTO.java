package com.surveychart.app.service.dto;

import com.surveychart.app.domain.Choice;
import lombok.Data;

@Data
public class ChoiceDTO {

    private String value;
    private String text;

    ChoiceDTO(Choice choice) {
        this.value = choice.getValue();
        this.text = choice.getText();
    }
}
