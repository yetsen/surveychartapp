package com.surveychart.app.repository;

import com.surveychart.app.domain.Block;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BlockRepository  extends JpaRepository<Block, Long> {

    @Override List<Block> findAll ();
}
