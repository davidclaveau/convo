Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get 'users/index'
      post 'users/create'
      get '/show/:id', to: 'users#show'
      delete '/destroy', to: 'users#show'
    end
  end
  
  namespace :api do
    namespace :v1 do
      get 'conversations/index'
      post 'conversations/create'
      get '/show/:id', to: 'conversations#show'
      delete '/destroy', to: 'conversations#show'
    end
  end
  
  namespace :api do
    namespace :v1 do
      get 'conversation_users/index'
      post 'conversation_users/create'
      get '/show/:id', to: 'conversation_users#show'
      delete '/destroy', to: 'conversation_users#show'
    end
  end
  
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
