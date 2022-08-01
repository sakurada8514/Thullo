class Board < ActiveRecord::Base
  has_many :users_boards
  has_many :users, through: :users_boards
end
