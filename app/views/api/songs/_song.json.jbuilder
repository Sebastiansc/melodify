json.extract! song,
              :title,
              :artist,
              :audio_url,
              :cover_photo,
              :genre,
              :id,
              :thumbnail
json.likes song.likes.to_set
