package com.surveychart.app.repository;


import com.surveychart.app.domain.Formula;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FormulaRepository extends JpaRepository<Formula, Long> {

	List<Formula> findByIdIn(List<Long> idList);
}
