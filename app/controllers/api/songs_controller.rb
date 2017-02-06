class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
  end

  def show
    @user = User.find(username: params[:username])
    @song = Song.find(title: params[:title], user_id: @user.id)
    render :show
  end

  def destroy

  end

  def create
    @song = Song.new(son_params)
    @song.user_id = current_user.id
    if @song.valid?
      @song.save!
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def update

  end

  private

  def song_info
    @song
  end

  def song_params
    params.require(:song).permit(:title,
                                 :audio_url,
                                 :artist,
                                 :genre,
                                 :cover_photo)
  end
end
