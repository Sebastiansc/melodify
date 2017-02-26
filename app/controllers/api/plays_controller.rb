class Api::PlaysController < ApplicationController
  before_action :ensure_login, only: [:recent_plays, :index]

  def create
    @play = Play.find_by(
      user_id: current_user.id,
      song_id: params[:song_id]
    )
    if @play
      @play.touch
      render :show
    else
      create_play
    end
  end

  def recent_plays
    @plays = Play.recent_plays.where(user_id: current_user.id)
    if @plays.empty?
      render json: ["empty"]
    else
      render :index
    end
  end

  def index
    @plays = Play.all_plays
  end

  private

  def create_play
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
