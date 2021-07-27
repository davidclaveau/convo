class User < ApplicationRecord
  has_secure_password

  has_many :conversations

  has_many :conversation_users
  has_many :users, through: :conversation_users

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
end
