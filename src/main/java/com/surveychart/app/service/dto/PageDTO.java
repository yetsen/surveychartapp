package com.surveychart.app.service.dto;

import com.surveychart.app.domain.Block;
import com.surveychart.app.domain.Question;
import lombok.Data;

import java.util.Comparator;
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
        this.title = ""; //Invisible Page Title
        this.description = block.getDescription();
        this.elements = block.getQuestions().stream()
            .sorted(Comparator.comparing(Question::getId))
            .map(ElementDTO::new).collect(Collectors.toList());

    }
}
