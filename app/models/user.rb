class User < ApplicationRecord

  def self.from_omniauth(auth)
    where(auth.slice(:provider, :uid)).first_or_initialize.tap do |user|
      user.name = auth.info.name
      
    end
  end
end
