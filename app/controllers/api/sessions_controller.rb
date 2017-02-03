class Api::SessionsController < ApplicationController
  def create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    render :index
  end

  def destroy
    session[:user_id] = nil
    render :index
  end
end
