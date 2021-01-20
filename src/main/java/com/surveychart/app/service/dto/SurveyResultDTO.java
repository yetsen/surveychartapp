package com.surveychart.app.service.dto;

import com.surveychart.app.domain.Answer;
import lombok.Data;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
public class SurveyResultDTO {

    Map<String, String> singleNode = new HashMap<>();
    Map<String, Map<String, String>> parentNode = new HashMap<>();

    public SurveyResultDTO (List<Answer> answers) {
        answers.forEach(
            answer -> {
                if (ObjectUtils.isEmpty(answer.getQuestion().getParent())) {
                    singleNode.put(answer.getQuestion().getName(), answer.getChoice().getValue());
                } else {
                    Map<String, String> node = parentNode.get(answer.getQuestion().getParent().getName());
                    if (CollectionUtils.isEmpty(node)) {
                        node = new HashMap<>();
                    }
                    node.put(answer.getQuestion().getName(), answer.getChoice().getValue());
                    parentNode.put(answer.getQuestion().getParent().getName(), node);
                }
            }
        );
    }
}
