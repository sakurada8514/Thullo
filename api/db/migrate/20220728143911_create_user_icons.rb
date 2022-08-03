class CreateUserIcons < ActiveRecord::Migration[6.0]
  def change
    create_table :user_icons do |t|
      t.bigint :user_id, null: false
      t.string :icon, null: false
      t.timestamps
    end

    add_foreign_key :user_icons, :users, column: :user_id
  end
end
