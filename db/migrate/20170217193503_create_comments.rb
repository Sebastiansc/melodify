class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :song_id, null: false
      t.integer :posted_at
      t.timestamps
    end

    add_index :comments, :author_id
    add_index :comments, :song_id
  end
end
