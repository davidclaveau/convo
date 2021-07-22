Rails.application.routes.draw do

  #Users
  get 'users/index'
  post 'users/create'
  get '/show/:id', to: 'users#show'
  delete '/destroy/:id', to: 'users#delete'

  #Conversations
  get 'conversations/index'
  post 'conversations/create'
  get '/show/:id', to: 'conversations#show'
  delete '/destroy/:id', to: 'conversations#delete'
  
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
