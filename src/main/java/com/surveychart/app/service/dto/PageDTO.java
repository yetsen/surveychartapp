package com.surveychart.app.service.dto;

import com.surveychart.app.domain.Block;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class PageDTO {

    private String name;
    private String title;
    private String description;
    private List<ElementDTO> elements;

    public PageDTO (Block block) {
        this.name = block.getName();
        this.title = block.getTitle();
        this.description = block.getDescription();
        this.elements = block.getQuestions().stream().map(ElementDTO::new).collect(Collectors.toList());

    }
}
