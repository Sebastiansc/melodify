class Api::PlaysController < ApplicationController
  def create
    @play = Play.new(
      user_id: current_user.id,
      song_id: params[:song_id]
    )
    if @play.valid?
      @play.save
      render :show
    else
      render json: {}
    end
  end
end
