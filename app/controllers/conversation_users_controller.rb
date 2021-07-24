class ConversationUsersController < ApplicationController
  def index
    conversation_user = ConversationUser.all.order(created_at: :desc)
    render json: conversation_user
  end

  def create
    conversation_user = ConversationUser.create!(conversation_user_params)
    if conversation_user
      render json: conversation_user
    else
      render json: conversation_user.errors
    end
  end

  def show
    if conversation_user
      render json: conversation_user
    else
      render json: conversation_user.errors
    end
  end

  def destroy
    conversation_user&.destroy
    render json: { message: 'Conversation_User deleted!' }
  end

  private

  def conversation_user_params
    params.permit(:conversation_id, :user_id)
  end

  def conversation_user
    @conversation_user ||= ConversationUser.find(params[:id])
  end
end


