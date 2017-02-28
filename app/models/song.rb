class Song < ApplicationRecord
  validates(
    :audio_url,
    :title,
    :thumbnail,
    :cover_photo,
    :user,
    :url,
    presence: true
  )
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :plays, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :playlist_songs
  has_many :playlists, through: :playlist_songs, source: :playlist

  def self.preload
    { song: [:likes, :plays, :user] }
  end
end
