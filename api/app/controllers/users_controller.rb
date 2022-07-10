class UsersController < ApplicationController
  before_action :authenticate_user!

  def sign_in_user
    render json: current_user
  end
end
