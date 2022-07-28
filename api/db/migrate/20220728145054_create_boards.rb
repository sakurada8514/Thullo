class CreateBoards < ActiveRecord::Migration[6.0]
  def change
    create_table :boards do |t|
      t.references :workspaces, null: false, foreign_key: true
      t.bigint :admin_user_id, null: false
      t.string :board_name, null: false
      t.string :board_description
      t.integer :public_scope_type, null: false
      t.timestamps
    end

    add_foreign_key :boards, :users, column: :admin_user_id
    create_join_table :boards, :users, table_name: :users_boards
  end
end
