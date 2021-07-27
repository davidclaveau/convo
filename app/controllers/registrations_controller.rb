class RegistrationsController < ApplicationController

  def create
    user = User.create!(
      username: params['user']['username'],
      email: params['user']['email'],
      password: params['user']['password'],
      password_confirmation: params['user']['password_confirmation']
    )

    if user
      # session[:user_id] = user.user_id
      render json: {
        status: :created,
        user: user
      }
    else
      render json: { status: 500 }
    end
  end

  private

    def user_params
      params.permit(:username, :email, :password)
    end

end