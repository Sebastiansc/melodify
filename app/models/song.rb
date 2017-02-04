class Song < ApplicationRecord
  validates :audio_url, :title, :user, presence: true
  belongs_to :user
end
