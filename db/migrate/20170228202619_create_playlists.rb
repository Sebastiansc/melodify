class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.string :name, null: false
      t.boolean :public, default: true
      t.integer :user_id, null: false
      t.boolean :is_album, default: false
      t.timestamps
    end
    add_index :playlists, :user_id
  end
end
