class PlaylistSong < ApplicationRecord
  validates :playlist, :song, presence: true
  validates_uniqueness_of :song, scope: :playlist
  belongs_to :playlist
  belongs_to :song
end
