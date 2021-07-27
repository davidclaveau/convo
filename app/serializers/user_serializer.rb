class UserSerializer
  include JSONAPI::Serializer
  attributes :username, :password, :location_longitude, :location_latitude, :location_accuracy

  has_many :conversations
  has_many :conversation_users
end
