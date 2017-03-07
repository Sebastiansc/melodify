json.extract!(
  playlist,
  :name,
  :public,
  :user_id,
  :id,
  :is_album,
  :url,
  :cover_photo
)
json.ownerUrl current_user.url
json.set! :tracks do
  json.array! playlist.songs
end
