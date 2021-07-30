require 'rails_helper'

RSpec.describe "Conversation_user model", type: :model do
  
  before :each do
    @user = User.new(
      username: 'markusnaslund',
      email: 'email19@dev.com',
      password_digest: 'password'
    )
    @user.save

    @conversation = Conversation.new(
      user_id: @user.id,
      title: 'Convo about hockey',
      user_limit: 10,
      main_topic: 'Hockey'
    )
    @conversation.save

    @conversation_user = ConversationUser.new(
      conversation_id: @conversation.id,
      user_id: @user.id
    )
  end

  it "is valid with all attributes" do
    expect(@conversation_user).to be_valid
  end

end
