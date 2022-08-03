# frozen_string_literal: true

class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :users_boards
  has_many :boards, through: :users_boards
  has_one :icon, class_name: 'UserIcon'
end
