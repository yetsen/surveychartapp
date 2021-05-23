package com.surveychart.app.repository;


import com.surveychart.app.domain.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CompanyRepository  extends JpaRepository<Company, Long> {

	Optional<Company> findByEmployeeCode(String code);

	Optional<Company> findByEmployerCode(String code);
}
