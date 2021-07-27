module Api
  module V1
    class ConversationUsersController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        conversation_users = ConversationUser.all

        render json: ConversationUserSerializer.new(conversation_users).to_json

      end
      
      def show
        conversation_user = ConversationUser.find_by(id: params[:id])
        
        render json: ConversationUserSerializer.new(conversation_user).to_json
      end
      
      def create
        conversation_user = ConversationUser.new(conversation_user_params)
        
        if conversation_user.save
          render json: ConversationUserSerializer.new(conversation_user).to_json
        else
          render json: { error: conversation_user.errors.messages }, status: 422
        end
      end
      
      def update
        conversation_user = ConversationUser.find_by(id: params[:id])
        
        if conversation_user.update(conversation_user_params)
          render json: ConversationUserSerializer.new(conversation_user).to_json
        else
          render json: { error: conversation_user.errors.messages }, status: 422
        end
      end
      
      def destroy
        conversation_user = ConversationUser.find_by(id: params[:id])
        
        if conversation_user.destroy
          head :no_content
        else
          render json: { error: conversation_user.errors.messages }, status: 422
        end
      end

      private

      def conversation_user_params
        params.permit(:id, :conversation_id, :user_id)
      end
    end
  end
end