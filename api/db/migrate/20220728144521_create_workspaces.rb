class CreateWorkspaces < ActiveRecord::Migration[6.0]
  def change
    create_table :workspaces do |t|
      t.string :workspace_name, null: false
      t.string :workcpace_description, null: false
      t.timestamps
    end
    create_join_table :users, :workspaces
  end
end
