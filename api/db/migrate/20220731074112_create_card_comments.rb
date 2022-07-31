class CreateCardComments < ActiveRecord::Migration[6.0]
  def change
    create_table :card_comments do |t|
      t.references :cards, null: false, foreign_key: true
      t.references :users, null: false, foreign_key: true
      t.string :comment, null: false
      t.timestamps
    end
  end
end
