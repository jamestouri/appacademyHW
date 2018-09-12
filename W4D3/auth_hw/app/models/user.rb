class User < ApplicationRecord
  validates :username, :session_token, uniqueness: true
  validates :password_digest, presence: true

  if password_digest.empty?
    raise "Password can't be blank"
  end

  def self.find_by_credentials(username, password)
    User.find_by(username: username, password: password)
    if BCrypt::Password.new(password) == password && username == username
      return user
    else
      nil
  end

  def self.generate_session_token
    code = SecureRandom::urlsafe_base64
    code
  end

  def reset_session_token(session_token)
    code = SecureRandom::urlsafe_base64
    code 
  end

end
