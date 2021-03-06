class User < ApplicationRecord
  validates(
    :username,
    :url,
    :password_digest,
    :session_token,
    presence: true
  )
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true
  attr_reader :password
  after_initialize :ensure_session_token

  has_many :likes, dependent: :destroy
  has_many :songs, dependent: :destroy
  has_many :plays, dependent: :destroy
  has_many :playlists, dependent: :destroy

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.password?(password) ? user : nil
  end


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

end
