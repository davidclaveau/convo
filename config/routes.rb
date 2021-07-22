Rails.application.routes.draw do
  get 'conversations/index'
  post 'conversations/create'
  get '/show/:id', to: 'conversations#show'
  delete '/destroy/:id', to: 'conversations#delete'
  
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
