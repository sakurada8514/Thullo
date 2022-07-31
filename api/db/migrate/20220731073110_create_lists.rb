class CreateLists < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.references :boards, null: false, foreign_key: true
      t.string :list_name, null: false
      t.timestamps
    end
  end
end
