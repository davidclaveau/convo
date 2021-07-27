module Api
  module V1
    class UsersController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        users = User.all

        render json: UserSerializer.new(users).to_json

      end
      
      def show
        user = User.find_by(username: params[:username])
        
        render json: UserSerializer.new(user).to_json
      end
      
      def create
        user = User.new(user_params)
        
        if user.save
          render json: UserSerializer.new(user).to_json
        else
          render json: { error: user.errors.messages }, status: 422
        end
      end
      
      def update
        user = User.find_by(username: params[:username])
        
        if user.update(user_params)
          render json: UserSerializer.new(user).to_json
        else
          render json: { error: user.errors.messages }, status: 422
        end
      end
      
      def destroy
        user = User.find_by(username: params[:username])
        
        if user.destroy
          head :no_content
        else
          render json: { error: user.errors.messages }, status: 422
        end
      end

      private

      def user_params
        params.permit(:username, :password_digest, :location_longitude, :location_latitude, :location_accuracy)
      end

    end
  end
end
