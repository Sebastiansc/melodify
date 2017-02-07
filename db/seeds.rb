# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.create({
  title: "iSpy feat. Lil Yachty",
  user_id: 5,
  audio_url: "https://res.cloudinary.com/flikr/video/upload/v1486441928/iSpy_feat._Lil_Yachty_295926514_soundcloud_g5l48g.mp3",
  cover_photo: "https://res.cloudinary.com/flikr/image/upload/v1486442039/artworks-000196529492-77zopd-t500x500_ogtnrg.jpg",
  genre: "Hip hop & Rap",
  artist: "KYLE."
  })

11.times do |i|
  Song.create({
    title: "Test#{i}",
    user_id: 5,
    audio_url: "https://res.cloudinary.com/flikr/video/upload/v1486323594/automation_bwwogm.mp3",
    cover_photo: "https://res.cloudinary.com/flikr/image/upload/v1486411231/cover_o90m2w.jpg",
    genre: "Test",
    artist: "Napoleon"
    })
end
