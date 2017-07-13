class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if(@user.save)
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def show
    @user = current_user
  end
end
