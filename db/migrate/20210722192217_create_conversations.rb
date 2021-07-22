class CreateConversations < ActiveRecord::Migration[6.1]
  def change
    create_table :conversations do |t|
      t.integer :owner
      t.string :conversation_title
      t.integer :user_limit
      t.float :location_longitude
      t.float :location_latitude
      t.integer :location_accuracy
      t.string :main_topic

      t.timestamps
    end
  end
end
