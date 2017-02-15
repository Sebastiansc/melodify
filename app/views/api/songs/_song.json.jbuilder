json.extract! song,
              :title,
              :artist,
              :audio_url,
              :cover_photo,
              :genre,
              :id,
              :thumbnail
user_ids = []
song.likes.each { |like| user_ids << like.user_id }
json.likes user_ids
