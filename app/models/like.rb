class Like < ApplicationRecord
  validates :user, :song, presence: true
  validates_uniqueness_of :user, scope: :song
  belongs_to :user
  belongs_to :song
end
