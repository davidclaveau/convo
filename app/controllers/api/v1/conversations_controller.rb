module Api
  module V1
    class ConversationsController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        conversations = Conversation.all

        render json: ConversationSerializer.new(conversations).to_json

      end
      
      def show
        conversation = Conversation.find_by(id: params[:id])
        
        render json: ConversationSerializer.new(conversation).to_json
      end
      
      def create
        conversation = Conversation.new(conversation_params)
        
        if conversation.save
          render json: ConversationSerializer.new(conversation).to_json
        else
          render json: { error: conversation.errors.messages }, status: 422
        end
      end
      
      def update
        conversation = Conversation.find_by(id: params[:id])
        
        if Conversation.update(conversation_params)
          render json: ConversationSerializer.new(conversations).to_json
        else
          render json: { error: conversation.errors.messages }, status: 422
        end
      end
      
      def destroy
        conversation = Conversation.find_by(id: params[:id])
        
        if conversation.destroy
          head :no_content
        else
          render json: { error: conversation.errors.messages }, status: 422
        end
      end

      private

      def conversation_params
        params.permit(:id, :title, :main_topic)
      end
    end
  end
end
