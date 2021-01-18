package com.surveychart.app.service;

import com.surveychart.app.domain.Answer;
import com.surveychart.app.domain.Block;
import com.surveychart.app.repository.*;
import com.surveychart.app.service.dto.AnswerDTO;
import com.surveychart.app.service.dto.SurveyDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class SurveyService {

    private final BlockRepository blockRepository;

    private final AnswerRepository answerRepository;

    private final UserRepository userRepository;

    private final QuestionRepository questionRepository;

    private final ChoiceRepository choiceRepository;


    public SurveyService (BlockRepository blockRepository, AnswerRepository answerRepository, UserRepository userRepository, QuestionRepository questionRepository,
        ChoiceRepository choiceRepository) {
        this.blockRepository = blockRepository;
        this.answerRepository = answerRepository;
        this.userRepository = userRepository;
        this.questionRepository = questionRepository;
        this.choiceRepository = choiceRepository;
    }

    public SurveyDTO getSurveyData() {
        List<Block> blocks = getAllBlocks();
        return new SurveyDTO(blocks);
    }

    private List<Block> getAllBlocks() {
        return blockRepository.findAll();
    }

    public void putAnswers(List<AnswerDTO> answers) {
        answerRepository.saveAll(answers.stream().map(answerDTO -> {
            Answer answer = new Answer();
            answer.setUser(Optional.of(userRepository
                .findById(answerDTO.getUserId())).get().orElseThrow(RuntimeException::new));
            answer.setQuestion(Optional.of(questionRepository
                .findById(answerDTO.getUserId())).get().orElseThrow(RuntimeException::new));
            answer.setChoice(Optional.of(choiceRepository
                .findById(answerDTO.getUserId())).get().orElseThrow(RuntimeException::new));
            return answer;
        }).collect(Collectors.toList()));
    }
}
