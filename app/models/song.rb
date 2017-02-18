class Song < ApplicationRecord
  validates :audio_url, :title, :user, presence: true
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :plays, dependent: :destroy
  has_many :comments, dependent: :destroy

  def self.preload
    { song: [:likes, :plays, :user] }
  end
end
