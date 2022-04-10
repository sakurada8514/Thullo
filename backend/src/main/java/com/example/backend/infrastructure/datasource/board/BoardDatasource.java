package com.example.backend.infrastructure.datasource.board;

import java.util.List;

import com.example.backend.application.repository.board.BoardRepository;
import com.example.backend.domain.model.board.Board;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class BoardDatasource implements BoardRepository {
    private BoardMapper boardMapper;

    public BoardDatasource(BoardMapper boardMapper) {
        this.boardMapper = boardMapper;
    }

    @Override
    @Transactional
    public Long creartBoard(Board board) {
        boardMapper.insertBoard(board);
        boardMapper.insertBoardMember(board.getId(), board.getAdminUserId());
        return board.getId();
    }

    @Override
    public List<Board> findBoardListByUserId(Long userId) {
        return boardMapper.selectBoardListByUserId(userId);
    }

    @Override
    public List<Board> findBoardListByPublic() {
        return boardMapper.selectBoardListByPublic();
    }

    @Override
    public Board findBoardById(Long id) {
        return boardMapper.selectBoardById(id);
    }
}
