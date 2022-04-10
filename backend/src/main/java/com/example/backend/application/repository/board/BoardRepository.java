package com.example.backend.application.repository.board;

import java.util.List;

import com.example.backend.domain.model.board.Board;

import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository {
    public Long creartBoard(Board board);

    public List<Board> findBoardListByUserId(Long principalUserId);

    public List<Board> findBoardListByPublic();

    public Board findBoardById(Long id);

}
