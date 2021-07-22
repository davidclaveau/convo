class Conversation < ApplicationRecord
  validates :owner, presence: true
  validates :conversation_title, presence: true
  validates :user_limit, presence: true
  validates :main_topic, presence: true
end
