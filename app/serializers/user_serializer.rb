class UserSerializer
  include JSONAPI::Serializer
  attributes :username, :password_digest, :location_longitude, :location_latitude, :location_accuracy

  has_many :conversations
  has_many :conversation_users
end
