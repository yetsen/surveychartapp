package com.surveychart.app.service.dto;

import lombok.Data;

@Data
public class AnswerDTO {
    private Long userId;
    private Long questionId;
    private Long choiceId;
}
