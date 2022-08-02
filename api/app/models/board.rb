class Board < ActiveRecord::Base
  has_many :users_boards
  has_many :users, through: :users_boards

  enum public_scope_type: { only_member: 0, published: 1 }

  scope :not_joined, ->(user_id) { joins(:users_boards).where.not(users_boards: { user_id: user_id }) }
end
