# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  username: "davidclaveau",
  password: "password"
)

User.create(
  username: "bohorvat",
  password: "password"
)

User.create(
  username: "eliaspettersson",
  password: "password"
)

User.create(
  username: "brockboeser",
  password: "password"
)

User.create(
  username: "quinnhughes",
  password: "password"
)

5.times do |i|
  Conversation.create(
    user_id: 1,
    title: "Convo #{i + 1}",
    user_limit: 10,
    main_topic: "This convo is about hockey number #{i}"
  )
end

10.times do |i|
  ConversationUser.create(
    conversation_id: rand(1..5),
    user_id: rand(2..5)
  )
end