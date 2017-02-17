json.extract! song,
              :title,
              :artist,
              :audio_url,
              :cover_photo,
              :genre,
              :id,
              :thumbnail
json.owner song.user.username
user_ids = []
song.likes.each { |like| user_ids << like.user_id }
json.likes user_ids
json.timesPlayed song.plays.length
