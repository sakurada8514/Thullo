package com.example.backend.infrastructure.datasource.board;

import com.example.backend.application.repository.board.BoardRepository;
import com.example.backend.domain.model.board.Board;

import org.springframework.stereotype.Repository;

@Repository
public class BoardDatasource implements BoardRepository {
    private BoardMapper boardMapper;

    public BoardDatasource(BoardMapper boardMapper) {
        this.boardMapper = boardMapper;
    }

    @Override
    public Long creartBoard(Board board) {
        boardMapper.insertBoard(board);
        return board.id();
    }
}
