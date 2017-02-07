class AddThumbnailToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :thumbnail, :string, null: false
  end
end
