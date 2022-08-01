class RemoveWorkspaceIdFromBoards < ActiveRecord::Migration[6.0]
  def change
    remove_reference :boards, :workspaces, null: false, foreign_key: true
  end
end
