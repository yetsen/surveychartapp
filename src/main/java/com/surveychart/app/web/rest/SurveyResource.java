package com.surveychart.app.web.rest;

import com.surveychart.app.security.AuthoritiesConstants;
import com.surveychart.app.service.SurveyService;
import com.surveychart.app.service.dto.SurveyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/api/survey")
public class SurveyResource {

    private final SurveyService surveyService;

    public SurveyResource (SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    @GetMapping
    //@PreAuthorize ("hasAuthority(\"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<SurveyDTO> get() {
        SurveyDTO surveyDTO = surveyService.getSurveyData();
        return new ResponseEntity<>(surveyDTO, HttpStatus.OK);
    }
}
