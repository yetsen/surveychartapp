package com.surveychart.app.service.dto;

import lombok.Data;

import java.util.List;

@Data
public class PageDTO {

    private String name;
    private String title;
    private String description;
    private List<ElementDTO> elements;
}
