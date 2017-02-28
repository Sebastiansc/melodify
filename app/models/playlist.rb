class Playlist < ApplicationRecord
  validates :name, :user, presence: true
  belongs_to :user
  has_many :playlist_songs, dependent: :destroy
  has_many :songs, through: :playlist_songs, source: :song
end
