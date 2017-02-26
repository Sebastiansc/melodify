class AddIndexToUsersUrl < ActiveRecord::Migration[5.0]
  def change
    add_index :users, :url
  end
end
