class Like < ApplicationRecord
  validates :user, :song, presence: true
  validates_uniqueness_of :user, scope: :song
  belongs_to :user
  belongs_to :song

  def self.recent_likes
    all_plays.limit(5)
  end

  def self.all_likes
    desc.includes(Song.preload)
  end

  def self.desc
    order('created_at DESC')
  end

end
