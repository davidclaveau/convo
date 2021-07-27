class User < ApplicationRecord
  has_many :conversations

  has_many :conversation_users
  has_many :users, through: :conversation_users

  validates :username, presence: true
  validates :password, presence: true
end
