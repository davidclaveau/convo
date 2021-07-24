class Conversation < ApplicationRecord
  belongs_to :user

  has_many :conversation_users
  has_many :users, through: :conversation_users

  validates :title, presence: true
  validates :user_limit, presence: true
  validates :main_topic, presence: true
end
