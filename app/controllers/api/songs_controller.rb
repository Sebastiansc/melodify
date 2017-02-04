class Api::SongsController < ApplicationController
  def show
    @song = Song.find(params[:song_id])
    render :show
  end

  def destroy

  end

  def create
    @song = Song.new(son_params)
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
