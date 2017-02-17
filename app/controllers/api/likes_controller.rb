class Api::LikesController < ApplicationController
  before_action :ensure_login, only: [:recent_likes]

  def create
    @like = Like.create!(
      user_id: current_user.id,
      song_id: params[:song_id]
    )
    render :show
  end

  def destroy
    @like = Like.find_by(
      user_id: current_user.id,
      song_id: params[:song_id]
    ).destroy
    render :show
  end

  def recent_likes
    @likes = Like.recent_likes.where(user_id: current_user.id)
    render :index
  end
end
