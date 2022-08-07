class Api::V1::ListsController < ApplicationController
  def create
    list = List.create!(list_params)
    render json: list
  end

  def update; end

  private

  def list_params
    params.require(:list).permit(:list_name, :boards_id)
  end
end
