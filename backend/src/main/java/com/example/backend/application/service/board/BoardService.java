package com.example.backend.application.service.board;

import java.util.List;

import com.example.backend.application.repository.board.BoardRepository;
import com.example.backend.domain.model.board.Board;
import com.example.backend.presentation.view.response.board.BoardCreateSuccessResponse;
import com.example.backend.presentation.view.response.board.BoardListResponse;

import org.springframework.stereotype.Service;

@Service
public class BoardService {
    private BoardRepository boardRepository;

    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    public BoardCreateSuccessResponse create(Board board) {
        Long createBoardId = boardRepository.creartBoard(board);
        return new BoardCreateSuccessResponse(createBoardId);
    }

    public BoardListResponse list(Long userId) {
        List<Board> boardList = boardRepository.findBoardListByUserId(userId);
        return new BoardListResponse(boardList);
    }
}
