class AddIndexToSongsUrl < ActiveRecord::Migration[5.0]
  def change
    add_index :songs, :url
  end
end
