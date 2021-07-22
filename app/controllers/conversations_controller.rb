class ConversationsController < ApplicationController
  def index
    conversation = Conversation.all.order(created_at: :desc)
    render json: conversation
  end

  def create
    conversation = Conversation.create!(conversation_params)
    if conversation
      render json: conversation
    else
      render json: conversation.errors
    end
  end

  def show
    if conversation
      render json: conversation
    else
      render json: conversation.errors
    end
  end

  def destroy
    conversation&.destroy
    render json: { message: 'Conversation deleted!' }
  end

  private

  def conversation_params
    params.permit(:name, :username, :password)
  end

  def conversation
    @conversation ||= Conversation.find(params[:id])
  end
end
