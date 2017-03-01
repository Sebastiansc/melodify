Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { formats: :json } do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :index]
    resources :likes, only: [:index]
    resources :plays, only: [:index]
    resources :playlists, only: [:destroy, :update, :create]
    resources :comments, only: [:create, :destroy, :update]
  end

  get 'api/songs/:owner_url/:song_url', to: 'api/songs#show'
  post 'api/songs/cover_art', to: 'api/songs#read_blob'

  post 'api/likes/:song_id', to: 'api/likes#create'
  delete 'api/likes/:song_id', to: 'api/likes#destroy'
  get 'api/likes/recent', to: 'api/likes#recent_likes'

  post 'api/plays/:song_id', to: 'api/plays#create'
  get 'api/plays/recent', to: 'api/plays#recent_plays'

  get 'api/comments/:owner_url/:song_url', to: 'api/comments#index'

  get 'api/playlists/:url/tracks', to: 'api/playlists#tracks'
  get 'api/playlists/:song_url/', to: 'api/playlists#playlists'
end
