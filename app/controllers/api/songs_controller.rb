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
    response = Cloudinary::Uploader.upload(song_params[:cover_photo])
    @song = Song.new(song_params)
    @song.cover_photo = response['secure_url']
    @song.thumbnail = thumburl(response['secure_url'])
    @song.user_id = current_user.id
    if @song.save
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
