package com.surveychart.app.enums;

import lombok.Getter;

@Getter
public enum QuestionType {
    CHECKBOX("checkbox");

    private String value;

    QuestionType (String checkbox) {
        this.value = checkbox;
    }
}
