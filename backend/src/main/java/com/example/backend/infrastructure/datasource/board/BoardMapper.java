package com.example.backend.infrastructure.datasource.board;

import java.util.List;

import com.example.backend.domain.model.board.Board;

import org.apache.ibatis.annotations.Mapper;

import io.lettuce.core.dynamic.annotation.Param;

@Mapper
public interface BoardMapper {
    Boolean insertBoard(Board board);

    Boolean insertBoardMember(@Param("boardId") Long boardId, @Param("userId") Long userId);

    List<Board> selectBoardListByUserId(Long userId);
}
