class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @photos = photos(@user)
  end

  def create
    @user = User.new(user_params)
    unless user_params[:username]
      @user.username = user_params[:email].split('@')[0]
    end
    if @user.valid?
      unless user_params[:username]
        @user.username = user_params[:email].split('@')[0]
      end
      @user.save!
      login(@user)
      render 'api/sessions/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
