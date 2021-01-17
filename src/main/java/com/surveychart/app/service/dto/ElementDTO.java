package com.surveychart.app.service.dto;

import lombok.Data;

import java.util.List;

@Data
public class ElementDTO {

    private String type;
    private String name;
    private String title;
    private boolean hideNumber;
    private boolean isRequired;
    List<ChoiceDTO> choices;

}
