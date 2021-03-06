class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :ensure_login

  def login(user)
    session[:session_token] = user.session_token
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    current_user
  end

  def thumburl(url)
    root_url = url[0...46]
    tail_url = url[46..-1]
    "#{root_url}c_scale,h_120/#{tail_url}"
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def ensure_login
    render json: [] unless current_user
  end

  def find_song
    user = User.find_by(url: params[:owner_url])
    @song = user.songs.find_by(url: params[:song_url])
  end
end
