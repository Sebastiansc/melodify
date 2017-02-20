json.partial! 'song', song: @song
json.author do
  json.partial! partial: 'api/sessions/user', locals: { user: @song.user }
end
