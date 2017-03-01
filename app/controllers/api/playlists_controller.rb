class Api::PlaylistsController < ApplicationController
  def index
    @playlists = current_user.playlists
  end

  def tracks
    @playlist = Playlist.find_by(url: params[:url])
    @tracks = @playlist.tracks
    render :show
  end

  def playlists
    @song = Song.find_by(url: params[:song_url])
    @playlists = @song.playlists
    render :index
  end

  def destroy
    Playlist.find(params[:id]).destroy
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id
    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def update
    Playlist.find(params[:id]).update_attributes(playlist_params)
  end

  def add_track
    Playlist.find(params[:id]).songs << Song.find(params[:song_url])
  end

  private

  def playlist_params
    params.require(:playlist)
          .permit(
            :url,
            :name,
            :song_id,
            :public,
            :is_album
          )
  end
end
