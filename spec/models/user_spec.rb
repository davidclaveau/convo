require 'rails_helper'

RSpec.describe "User model", type: :model do

  before :each do
    @user = User.new(
      username: 'markusnaslund',
      email: 'email19@dev.com',
      password_digest: 'password'
    )
  end

  it 'is valid with all attributes' do
    expect(@user).to be_valid
  end

  it 'is invalid if missing username' do
    @user.username = nil
    @user.save
    
    expect(@user.errors.full_messages[0]).to eq("Username can't be blank")
  end

  it 'is invalid if missing email' do
    @user.email = nil
    @user.save
    
    expect(@user.errors.full_messages[0]).to eq("Email can't be blank")
  end
  
  it 'is invalid if missing password' do
    @user.password = nil
    @user.save

    expect(@user.errors.full_messages[0]).to eq("Password can't be blank")
  end
  
  it 'is invalid if username already exists' do
    @user.save

    userDuplicate = User.new(
      username: 'markusnaslund',
      email: 'email100@dev.com',
      password_digest: 'password'
    )
    userDuplicate.save

    expect(userDuplicate.errors.full_messages[0]).to eq("Username has already been taken")
  end
  
  it 'is invalid if email already exists' do
    @user.save

    userDuplicate = User.new(
      username: 'fakeplayer',
      email: 'email19@dev.com',
      password_digest: 'password'
    )
    userDuplicate.save

    expect(userDuplicate.errors.full_messages[0]).to eq("Email has already been taken")
  end

end
