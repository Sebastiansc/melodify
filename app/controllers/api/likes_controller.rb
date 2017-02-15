class Api::SessionsController < ApplicationController
  def create
    @like = Like.create!(
      user_id: current_user.id,
      photo_id: params[:photo_id]
    )
    render :show
  end

  def destroy
    @like = Like.find_by(
      user_id: current_user.id,
      photo_id: params[:photo_id]
    ).destroy
    render :show
  end

  private

  def user_params
    params.require(:like).permit(:song_id)
  end
end
