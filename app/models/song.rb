class Song < ApplicationRecord
  validates :audio_url, :title, :user, presence: true
  belongs_to :user
  has_many :likes
  has_many :plays
end
