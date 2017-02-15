class AddIndicesLikes < ActiveRecord::Migration[5.0]
  def change
    add_index :likes, :song_id
    add_index :likes, :user_id
  end
end
