class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :audio_url, null: false
      t.string :artist
      t.integer :user_id, null: false
      t.string :cover_photo
      t.string :title, null: false
      t.integer :plays, default: 0
      t.string :genre, default: nil
      t.timestamps
    end
  end
end
