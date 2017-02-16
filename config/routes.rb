Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { formats: :json } do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :songs
  end

  post 'api/likes/:song_id', to: 'api/likes#create'
  delete 'api/likes/:song_id', to: 'api/likes#destroy'
  post 'api/plays/:song_id', to: 'api/plays#create'
  get 'api/likes/recent', to: 'api/likes#recent_likes'
end
