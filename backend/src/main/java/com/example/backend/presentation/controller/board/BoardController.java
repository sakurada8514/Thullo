package com.example.backend.presentation.controller.board;

import com.example.backend.application.service.board.BoardService;
import com.example.backend.domain.model.user.PrincipalUser;
import com.example.backend.presentation.controller.AbstractController;
import com.example.backend.presentation.view.request.board.BoardRequest;
import com.example.backend.presentation.view.response.board.BoardCreateSuccessResponse;
import com.example.backend.presentation.view.response.board.BoardListResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/board")
public class BoardController extends AbstractController {
    private BoardService boardService;

    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @PostMapping("/create")
    public ResponseEntity<BoardCreateSuccessResponse> create(
            @AuthenticationPrincipal PrincipalUser principalUser,
            @RequestBody BoardRequest request) {
        return successResponseEntity(boardService.create(request.toBoard(principalUser.user().getId())));
    }

    @GetMapping("/list/my")
    public ResponseEntity<BoardListResponse> list(@AuthenticationPrincipal PrincipalUser principalUser) {
        return successResponseEntity(boardService.list(principalUser.user().getId()));
    }
}
