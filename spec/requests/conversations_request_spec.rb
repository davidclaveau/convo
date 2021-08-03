require 'rails_helper'

RSpec.describe "Conversations Controller", type: :request do

  before :each do
    @user = User.create!(
      username: 'markusnaslund',
      email: 'email19@dev.com',
      password_digest: 'password'
    )
    @user.save

    @conversation = Conversation.create!(
      user_id: @user.id,
      title: 'Convo about hockey',
      user_limit: 10,
      main_topic: 'Hockey'
    )
    @conversation.save
  end

  describe "GET api/v1/conversations#index" do
    it "returns response status 200" do
      get "/api/v1/conversations"

      expect(response.status).to eq(200)
    end
  end
  
  describe "GET api/v1/conversations#show" do
    it "returns status 200, valid conversation with title and topic" do
      get "/api/v1/conversations/#{@conversation.id}"

      expect(response.status).to eq(200)
      expect(response.body).to include("Hockey")
      expect(response.body).to include("Convo about hockey")
    end
  end
  
  describe "GET api/v1/conversations#update" do
    it "returns status 200, patch conversation title  to 'rugby'" do
      form_params = {
        title: "rugby"
      }
      patch "/api/v1/conversations/#{@conversation.id}", params: form_params
  
      expect(response.status).to eq(200)
      expect(response.body).to include("rugby")
    end
  end

  describe "GET api/v1/conversations#destroy" do
    it "returns status 204, no conversation found in body" do
      delete "/api/v1/conversations/#{@conversation.id}"

      expect(response.status).to eq(204)
      expect(response.body).not_to include("Hockey")
      expect(response.body).not_to include("Convo about hockey")
    end
  end
end
