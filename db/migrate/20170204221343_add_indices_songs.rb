class AddIndicesSongs < ActiveRecord::Migration[5.0]
  def change
    enable_extension "btree_gin"
    add_index :songs, :artist
    add_index :songs, :title, using: :gin
  end
end
