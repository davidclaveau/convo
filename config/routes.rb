Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users, param: :username
      resources :conversations, :conversation_users
    end
  end
  
  resources :sessions, only: [:new, :create, :destroy]
  
  root 'homepage#index'
  get '/*path' => 'homepage#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
