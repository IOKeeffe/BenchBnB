class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if(@user.save)
      log_in(@user)
  end
end
