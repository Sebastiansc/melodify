json.partial! 'song', song: @song
json.author do
  json.partial! partial: 'api/sessions/user', locals: { user: @song.user }
end
json.posted format_time(time_ago_in_words(@song.created_at))
