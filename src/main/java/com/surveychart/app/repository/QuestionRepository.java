package com.surveychart.app.repository;

import com.surveychart.app.domain.Question;
import com.surveychart.app.enums.QuestionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    Optional<Question> findByName(String name);

    long countAllByTypeNotIn(List<QuestionType> questionTypes);
}
