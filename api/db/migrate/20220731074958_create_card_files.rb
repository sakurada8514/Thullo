class CreateCardFiles < ActiveRecord::Migration[6.0]
  def change
    create_table :card_files do |t|
      t.references :cards, null: false, foreign_key: true
      t.string :file_src, null: false
      t.timestamps
    end
  end
end
