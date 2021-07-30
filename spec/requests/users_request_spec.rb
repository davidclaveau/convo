require 'rails_helper'

RSpec.describe "Users Controller", type: :request do

  before :each do
    @user = User.create!(
      username: 'markusnaslund',
      email: 'email19@dev.com',
      password_digest: 'password'
    )
    @user.save
  end

  describe "GET api/v1/users#index" do
    it "returns response status 200" do
      get "/api/v1/users/index"

      expect(response.status).to eq(200)
    end
  end
  
  describe "GET api/v1/users#show" do
    it "returns status 200, valid username and email for a user" do
      get "/api/v1/users/markusnaslund"
      

      expect(response.status).to eq(200)
      expect(response.body).to include("markusnaslund")
      expect(response.body).to include("email19@dev.com")
    end
  end
  
  describe "GET api/v1/users#update" do
    it "returns status 200, valid email change for a user" do
      form_params = {
        email: "retired19@dev.com"
      }
      patch "http://localhost:3000/api/v1/users/markusnaslund", params: form_params
  
      expect(response.status).to eq(200)
      expect(response.body).to include("markusnaslund")
      expect(response.body).to include("retired19@dev.com")
    end
  end

  describe "GET api/v1/users#update" do
    it "returns status 204 (no content), no user found in body" do
      delete "http://localhost:3000/api/v1/users/markusnaslund"

      expect(response.status).to eq(204)
      expect(response.body).not_to include("markusnaslund")
      expect(response.body).not_to include("email19@dev.com")
    end
  end

end
