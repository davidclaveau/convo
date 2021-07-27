Rails.application.routes.draw do

  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  namespace :api do
    namespace :v1 do
      resources :users, param: :username
      resources :conversations, :conversation_users
    end
  end
  
  root 'homepage#index'
  get '/*path' => 'homepage#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
