package com.surveychart.app.repository;

import com.surveychart.app.domain.Block;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlockRepository  extends JpaRepository<Block, Long> {

    @Override List<Block> findAll ();
}
