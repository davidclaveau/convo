class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :password
      t.float :location_longitude
      t.float :location_latitude
      t.integer :location_accuracy

      t.timestamps
    end
  end
end
