class Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  include Auth::JoinToken

  private

  def sign_up_params
    raise RuntimeError
    params.permit(:name, :email, :password, :password_confirmation)
  end
end
