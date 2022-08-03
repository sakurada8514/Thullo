class Api::V1::BoardsController < ApplicationController
  def index
    boards = current_user.boards.preload(:users)
    render json: boards
  end

  def public
    boards = Board.published.not_joined(current_user.id).preload(:users)
    render json: boards
  end

  def show; end

  def create
    board = Board.create!(board_params)
    render json: board
  end

  def update; end

  private

  def board_params
    params.require(:board)
          .permit(:board_name,
                  :board_description,
                  :image,
                  :public_scope_type)
          .merge(admin_user_id: current_user.id,
                 user_ids: [current_user.id])
  end
end
