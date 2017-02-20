class Api::SongsController < ApplicationController
  def index
    @songs = Song.all.includes(:likes, :plays, :user)
  end

  def show
    @song = Song.find(params[:id])
    
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

  def song_params
    params.require(:song).permit(:title,
                                 :audio_url,
                                 :artist,
                                 :genre,
                                 :cover_photo)
  end
end
