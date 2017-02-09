# rubocop:disable all
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create({
  username: "50 cent",
  password: "123456",
  email: "guest@test.com"
})
User.create({
  username: "KYLE.",
  password: "123456",
  email: "guest@tune.com"
})
User.create({
  username: "Eminem",
  password: "123456",
  email: "guest@goland.com"
})
User.create({
  username: "guest",
  password: "123456",
  email: "guest@local.com"
})
data = [
  {
    title: "iSpy feat. Lil Yachty",
    audio_url: "https://res.cloudinary.com/flikr/video/upload/v1486441928/iSpy_feat._Lil_Yachty_295926514_soundcloud_g5l48g.mp3",
    cover_photo: "https://res.cloudinary.com/flikr/image/upload/v1486442039/artworks-000196529492-77zopd-t500x500_ogtnrg.jpg",
    genre: "Hip hop & Rap",
    artist: "KYLE."
  },
  {
    title: "Bounce Back",
    audio_url: "https://res.cloudinary.com/flikr/video/upload/v1486502431/Bounce_Back_290337922_soundcloud_erv19r.mp3",
    cover_photo: "https://res.cloudinary.com/flikr/image/upload/v1486502488/take-no-big-sean_avekvt.jpg",
    genre: "Rap",
    artist: "Big Sean"
  },
  {
    title: "GET RIGHT WITCHA",
    audio_url: "https://res.cloudinary.com/flikr/video/upload/v1486502427/GET_RIGHT_WITCHA_304747935_soundcloud_xkly4v.mp3",
    cover_photo: "https://res.cloudinary.com/flikr/image/upload/v1486502415/artworks-000204960176-sobce8-t500x500_jremv1.jpg",
    genre: "Trap",
    artist: "Migos"
  },
  {
    title: "Savage",
    audio_url: "https://res.cloudinary.com/flikr/video/upload/v1486502573/No_Heart_273828812_soundcloud_k65w7o.mp3",
    cover_photo: "https://res.cloudinary.com/flikr/image/upload/v1486502415/savage_cmoitj.jpg",
    genre: "Hip hop & Rap",
    artist: "No heart"
  },
  {
    title: "Gucci Mane - Both (Ft.Drake)",
    audio_url: "https://res.cloudinary.com/flikr/video/upload/v1486503935/Gucci_Mane_-_Both_Ft._Drake__298167372_soundcloud_fkwguu.mp3",
    cover_photo: "https://res.cloudinary.com/flikr/image/upload/v1486503857/artworks-000198690204-yyos7l-t500x500_aj0brh.jpg",
    genre: "Rap",
    artist: "Trap God"
  },
  {
    title: "Location",
    audio_url: "https://res.cloudinary.com/flikr/video/upload/v1486504142/Location_261587226_soundcloud_c5aman.mp3",
    cover_photo: "https://res.cloudinary.com/flikr/image/upload/v1486504148/artworks-2UsZfmpvom8I-0-t500x500_v8tlkk.jpg",
    genre: "Rap",
    artist: "Khalid"
  },
  {
    title: "Oh Wonder - Lose It (Jerry Folk Remix)",
    audio_url: "https://res.cloudinary.com/flikr/video/upload/v1486505518/Oh_Wonder_-_Lose_It_Jerry_Folk_Remix__207534343_soundcloud_aeb2zu.mp3",
    cover_photo: "https://res.cloudinary.com/flikr/image/upload/v1486505571/artworks-000118272430-2uofaw-t500x500_vp5gjs.jpg",
    genre: "Indie",
    artist: "Jerry Folk"
  },
  {
    title: "Are You With Me",
    audio_url: "https://res.cloudinary.com/flikr/video/upload/v1486505673/Are_You_With_Me_125851434_soundcloud_hpd5im.mp3",
    cover_photo: "https://res.cloudinary.com/flikr/image/upload/v1486505652/artworks-000084779311-iq5yom-t500x500_krpnjy.jpg",
    genre: "Indie",
    artist: "Lost Frequencies"
  },
  {
    title: "drugs",
    audio_url: "https://res.cloudinary.com/flikr/video/upload/v1486505853/drugs_273653401_soundcloud_jwrvds.mp3",
    cover_photo: "https://res.cloudinary.com/flikr/image/upload/v1486505818/artworks-000171432996-7spwh0-t500x500_agmfp7.jpg",
    genre: "Indie",
    artist: "Eden"
  },
  {
    title: "Luis Fonsi Ft Daddy Yankee - Despacito",
    audio_url: "https://res.cloudinary.com/flikr/video/upload/v1486505990/Luis_Fonsi_Ft_Daddy_Yankee_-_Despacito_302443990_soundcloud_okzxay.mp3",
    cover_photo: "https://res.cloudinary.com/flikr/image/upload/v1486506143/artworks-000202745954-4fxoqd-t500x500_s74ik6.jpg",
    genre: "Reggaeton",
    artist: "Reggaeton de la gente"
  },
  {
    title: "Nicky Jam – El Amante",
    audio_url: "https://res.cloudinary.com/flikr/video/upload/v1486506547/Nicky_Jam_El_Amante_301974664_soundcloud_jjljrs.mp3",
    cover_photo: "https://res.cloudinary.com/flikr/image/upload/v1486506451/artworks-000202264768-778yr7-t500x500_onf9iu.jpg",
    genre: "Reggaeton",
    artist: "Reggaeton de la gente"
  },
]

def thumburl(url)
  rootUrl = url[0...46];
  tailUrl = url[46..-1];
  "#{rootUrl}c_scale,h_120/#{tailUrl}"
end

data.each do |info|
  puts "Created #{info[:title]}"
  Song.create({
    title: info[:title],
    user_id: 5,
    audio_url: info[:audio_url],
    cover_photo: info[:cover_photo],
    genre: info[:genre],
    thumbnail: thumburl(info[:cover_photo]),
    artist: info[:artist]
  })
end

  Song.create({
    title: "Testing labsauce",
    user_id: 5,
    audio_url: "https://res.cloudinary.com/flikr/video/upload/v1486323594/automation_bwwogm.mp3",
    cover_photo: "https://res.cloudinary.com/flikr/image/upload/v1486411231/cover_o90m2w.jpg",
    genre: "Test",
    thumbnail: thumburl("https://res.cloudinary.com/flikr/video/upload/v1486323594/automation_bwwogm.mp3"),
    artist: "Napoleon Bonandapart"
    })
