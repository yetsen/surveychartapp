package com.surveychart.app.service;

import com.surveychart.app.domain.Block;
import com.surveychart.app.repository.BlockRepository;
import com.surveychart.app.service.dto.SurveyDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class SurveyService {

    private final BlockRepository blockRepository;

    public SurveyService (BlockRepository blockRepository) {
        this.blockRepository = blockRepository;
    }

    public SurveyDTO getSurveyData() {
        List<Block> blocks = getAllBlocks();
        return new SurveyDTO(blocks);
    }

    private List<Block> getAllBlocks() {
        return blockRepository.findAll();
    }
}
