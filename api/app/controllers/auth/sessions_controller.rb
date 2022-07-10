class Auth::SessionsController < DeviseTokenAuth::SessionsController
  include Autn::JoinToken
end
