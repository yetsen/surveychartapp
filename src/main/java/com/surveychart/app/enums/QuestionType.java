package com.surveychart.app.enums;

import lombok.Getter;

@Getter
public enum QuestionType {
    CHECKBOX("checkbox"),
    DROPDOWN("dropdown"),
    RADIOGROUP("radiogroup");

    private String value;

    QuestionType (String checkbox) {
        this.value = checkbox;
    }
}
