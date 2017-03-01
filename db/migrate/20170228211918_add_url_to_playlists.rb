class AddUrlToPlaylists < ActiveRecord::Migration[5.0]
  def change
    add_column :playlists, :url, :string
  end
end
