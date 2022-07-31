class CreateCardLabels < ActiveRecord::Migration[6.0]
  def change
    create_table :card_labels do |t|
      t.references :master_label_colors, null: false, foreign_key: true
      t.references :boards, null: false, foreign_key: true
      t.string :label_name, null: false
      t.timestamps
    end

    create_join_table :card_labels, :cards, table_name: :cards_labels
  end
end
