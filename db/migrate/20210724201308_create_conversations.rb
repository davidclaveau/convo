class CreateConversations < ActiveRecord::Migration[6.1]
  def change
    create_table :conversations do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title, null: false
      t.integer :user_limit, null: false
      t.string :main_topic, null: false
      t.float :location_longitude
      t.float :location_latitude
      t.integer :location_accuracy

      t.timestamps
    end
  end
end
