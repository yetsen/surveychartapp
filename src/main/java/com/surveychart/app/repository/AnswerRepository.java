package com.surveychart.app.repository;

import com.surveychart.app.domain.Answer;
import com.surveychart.app.domain.Question;
import com.surveychart.app.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {

    Optional<Answer> findByUserAndQuestion(User user, Question question);
}
