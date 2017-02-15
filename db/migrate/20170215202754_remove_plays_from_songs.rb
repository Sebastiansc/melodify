class RemovePlaysFromSongs < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :plays
  end
end
