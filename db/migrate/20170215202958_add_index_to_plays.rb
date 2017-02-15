class AddIndexToPlays < ActiveRecord::Migration[5.0]
  def change
    add_index :plays, [:user_id, :song_id], unique: true
  end
end
