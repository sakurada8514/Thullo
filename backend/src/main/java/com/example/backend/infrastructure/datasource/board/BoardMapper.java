package com.example.backend.infrastructure.datasource.board;

import com.example.backend.domain.model.board.Board;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardMapper {
    Boolean insertBoard(Board board);
}
