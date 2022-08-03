class UserSerializer < ApplicationSerializer
  attributes :id, :name
  has_one :icon
end
