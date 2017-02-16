class Play < ApplicationRecord
  validates :user, :song, presence: true
  validates_uniqueness_of :user, scope: :song
  belongs_to :user
  belongs_to :song

  def self.recent_plays
    Play.desc.limit(5)
  end

  def self.all_plays
    Play.desc
  end

  def self.desc
    Play.order('updated_at DESC')
  end
end
