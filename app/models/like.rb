class Like < ApplicationRecord
  validates :user, :song, presence: true
  validates_uniqueness_of :user, scope: :song
  belongs_to :user
  belongs_to :song

  def self.recent_likes
    Like.order('created_at DESC').limit(5).includes(:song, :user)
  end
end
