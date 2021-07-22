# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  name: "David",
  username: "davidclaveau",
  password: "password"
)

User.create(
  name: "Caitlin",
  username: "caitlining",
  password: "password"
)

5.times do |i|
  Conversation.create(
    owner: 1,
    conversation_title: "Convo #{i + 1}",
    user_limit: 10,
    main_topic: "This convo is about hockey number #{i}"
  )
end