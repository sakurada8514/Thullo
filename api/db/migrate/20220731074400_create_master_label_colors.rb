class CreateMasterLabelColors < ActiveRecord::Migration[6.0]
  def change
    create_table :master_label_colors do |t|
      t.string :color_code, null: false
      t.timestamps
    end
  end
end
