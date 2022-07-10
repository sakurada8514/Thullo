class Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  include Auth::JoinToken

  private

  def sign_up_params
    params.permit(:name, :email, :password, :password_confirmation)
  end
end
