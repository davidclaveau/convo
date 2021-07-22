class CreateConversations < ActiveRecord::Migration[6.1]
  def change
    create_table :conversations do |t|
      t.integer :owner, null: false
      t.string :conversation_title, null: false
      t.integer :user_limit, null: false
      t.float :location_longitude
      t.float :location_latitude
      t.integer :location_accuracy
      t.string :main_topic, null: false

      t.timestamps
    end
  end
end
