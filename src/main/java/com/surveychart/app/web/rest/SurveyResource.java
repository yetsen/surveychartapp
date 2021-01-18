package com.surveychart.app.web.rest;

import com.surveychart.app.service.SurveyService;
import com.surveychart.app.service.dto.SurveyDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    @ResponseStatus (HttpStatus.CREATED)
    public void post() {

    }
}
