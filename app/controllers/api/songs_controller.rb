class Api::SongsController < ApplicationController
  def index
    @songs = Song.all.includes(:likes, :plays, :user)
  end

  def show
    user = User.find_by(url: params[:owner_url])
    @song = user.songs.find_by(url: params[:song_url])
  end

  def destroy

  end

  def create
    @song = Song.new(song_params)
    base64_image if song_params[:cover_photo][0..3] == 'data'
    @song.user_id = current_user.id
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def base64_image
    response = Cloudinary::Uploader.upload(song_params[:cover_photo])
    @song.cover_photo = response['secure_url']
    @song.thumbnail = thumburl(response['secure_url'])
  end

  def update
  end

  private

  def song_params
    params.require(:song).permit(:title,
                                 :audio_url,
                                 :artist,
                                 :genre,
                                 :url,
                                 :cover_photo)
  end
end
