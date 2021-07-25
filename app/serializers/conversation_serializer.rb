class ConversationSerializer
  include JSONAPI::Serializer
  attributes :user_id, :title, :user_limit, :main_top, :location_longitude, :location_latitude, :location_accuracy

  has_many :conversation_users
end
