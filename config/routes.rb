Rails.application.routes.draw do
  get 'conversations/index'
  get 'conversations/create'
  get 'conversations/show'
  get 'conversations/destroy'
  root 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
