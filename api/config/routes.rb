Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations',
    sessions: 'auth/sessions'
  }

  namespace :api do
    namespace :v1 do
      resources :users
      get 'sign_in_user' => 'users#sign_in_user'

      resources :boards, only: %i[index update show create] do
        collection do
          get 'public'
        end
      end
      resources :lists, only: %i[create update]
    end
  end
end
