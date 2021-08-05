Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users, param: :username
      resources :conversations
      resources :conversation_users
    end
  end
  
  resources :sessions, only: [:new, :create, :destroy]
  resources :registrations, only: [:create]

  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  
  root 'homepage#index'
  get '/*path' => 'homepage#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
