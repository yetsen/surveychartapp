package com.surveychart.app.service.dto;

import lombok.Data;

import java.util.List;

@Data
public class SurveyDTO {

    private String title;
    private String showProgressBar;
    private List<PageDTO> pages;
}
