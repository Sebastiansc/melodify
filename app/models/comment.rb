class Comment < ApplicationRecord
  validates :body, :author, :song, presence: true
  belongs_to :author, class_name: :User
  belongs_to :song
end
