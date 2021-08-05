require 'rails_helper'

RSpec.describe "Conversation model", type: :model do

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
  end

  it  'is valid with all attributes' do
    expect(@conversation).to be_valid
  end
  
  it  'is invalid if missing title' do
    @conversation.title = nil
    @conversation.save

    expect(@conversation.errors.full_messages[0]).to eq("Title can't be blank")
  end
  
  it  'is invalid if missing user_limit' do
    @conversation.user_limit = nil
    @conversation.save

    expect(@conversation.errors.full_messages[0]).to eq("User limit can't be blank")
  end
  
  it  'is invalid if missing main_topic' do
    @conversation.main_topic = nil
    @conversation.save

    expect(@conversation.errors.full_messages[0]).to eq("Main topic can't be blank")
  end
end
