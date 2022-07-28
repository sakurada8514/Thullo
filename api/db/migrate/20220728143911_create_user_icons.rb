class CreateUserIcons < ActiveRecord::Migration[6.0]
  def change
    create_table :user_icons do |t|
      t.references :users, null: false, foreign_key: true
      t.string :icon, null: false
      t.timestamps
    end
  end
end
