# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170302175443) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "btree_gin"

  create_table "comments", force: :cascade do |t|
    t.text     "body",       null: false
    t.integer  "author_id",  null: false
    t.integer  "song_id",    null: false
    t.integer  "posted_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id", using: :btree
    t.index ["song_id"], name: "index_comments_on_song_id", using: :btree
  end

  create_table "likes", force: :cascade do |t|
    t.integer  "song_id",    null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["song_id"], name: "index_likes_on_song_id", using: :btree
    t.index ["user_id"], name: "index_likes_on_user_id", using: :btree
  end

  create_table "playlist_songs", force: :cascade do |t|
    t.integer  "playlist_id", null: false
    t.integer  "song_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["playlist_id"], name: "index_playlist_songs_on_playlist_id", using: :btree
    t.index ["song_id"], name: "index_playlist_songs_on_song_id", using: :btree
  end

  create_table "playlists", force: :cascade do |t|
    t.string   "name",                        null: false
    t.boolean  "public",      default: true
    t.integer  "user_id",                     null: false
    t.boolean  "is_album",    default: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.string   "url"
    t.string   "cover_photo"
    t.index ["user_id"], name: "index_playlists_on_user_id", using: :btree
  end

  create_table "plays", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "song_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "song_id"], name: "index_plays_on_user_id_and_song_id", unique: true, using: :btree
  end

  create_table "songs", force: :cascade do |t|
    t.string   "audio_url",   null: false
    t.string   "artist"
    t.integer  "user_id",     null: false
    t.string   "cover_photo"
    t.string   "title",       null: false
    t.string   "genre"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "thumbnail",   null: false
    t.string   "description"
    t.string   "url"
    t.index ["artist"], name: "index_songs_on_artist", using: :btree
    t.index ["title"], name: "index_songs_on_title", using: :gin
    t.index ["url"], name: "index_songs_on_url", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.string   "email",           null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "url"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["url"], name: "index_users_on_url", using: :btree
  end

end
