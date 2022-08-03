class BoardSerializer < ApplicationSerializer
  attributes :admin_user_id, :board_name, :board_description, :public_scope_type, :image
  has_many :users
end
