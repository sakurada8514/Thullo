package com.example.backend.application.repository.board;

import com.example.backend.domain.model.board.Board;

import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository {
    public Long creartBoard(Board board);
}
