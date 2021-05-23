package com.surveychart.app.web.rest;


import com.surveychart.app.service.ChartService;
import com.surveychart.app.service.dto.ChartDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping ("/api/chart")
public class ChartResource {

    private final ChartService chartService;

    public ChartResource (ChartService chartService) {

        this.chartService = chartService;
    }

    @GetMapping("/{userId}")
    //@PreAuthorize ("hasAuthority(\"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<List<ChartDTO>> get(@PathVariable Long userId) {
        List<ChartDTO> chartDTOs = chartService.generateCharts(userId);
        return new ResponseEntity<>(chartDTOs, HttpStatus.OK);
    }

    @GetMapping("/company/{companyId}")
    //@PreAuthorize ("hasAuthority(\"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<List<ChartDTO>> getCompanyCharts(@PathVariable Long companyId) {
        List<ChartDTO> chartDTOs = chartService.generateCompanyCharts(companyId);
        return new ResponseEntity<>(chartDTOs, HttpStatus.OK);
    }
}
