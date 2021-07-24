class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password, null: false
      t.float :location_longitude
      t.float :location_latitude
      t.integer :location_accuracy

      t.timestamps
    end
  end
end
