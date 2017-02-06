json.songs @songs do |song|
  json.set! song.id do
    json.partial! 'song', song
  end
end
