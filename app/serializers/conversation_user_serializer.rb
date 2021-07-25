class ConversationUserSerializer
  include JSONAPI::Serializer
  attributes :conversation_id, :user_id
end
