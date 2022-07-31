class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.references :lists, null: false, foreign_key: true
      t.bigint :admin_user_id, null: false
      t.string :title, null: false
      t.string :description
      t.string :image
      t.datetime :start_date
      t.datetime :deadline_date
      t.timestamps
    end

    add_foreign_key :cards, :users, column: :admin_user_id
    create_join_table :cards, :users, table_name: :users_cards
  end
end
