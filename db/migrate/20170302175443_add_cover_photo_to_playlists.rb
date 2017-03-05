class AddCoverPhotoToPlaylists < ActiveRecord::Migration[5.0]
  def change
    add_column :playlists, :cover_photo, :string
  end
end
