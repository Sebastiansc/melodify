class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username],
                                     user_params[:password])
    if @user
      login(@user)
      render :show
    else
      render json: [
          'Unknown username/password combination'
        ], status: 401
    end
  end

  def destroy
    render json: ['Not signed in'], status: 404 unless current_user
    logout!
    render json: {}
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
