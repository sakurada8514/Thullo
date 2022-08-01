# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_01_141934) do

  create_table "boards", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "admin_user_id", null: false
    t.string "board_name", null: false
    t.string "board_description"
    t.integer "public_scope_type", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
    t.index ["admin_user_id"], name: "fk_rails_887ce4c701"
  end

  create_table "card_comments", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "cards_id", null: false
    t.bigint "users_id", null: false
    t.string "comment", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cards_id"], name: "index_card_comments_on_cards_id"
    t.index ["users_id"], name: "index_card_comments_on_users_id"
  end

  create_table "card_files", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "cards_id", null: false
    t.string "file_src", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cards_id"], name: "index_card_files_on_cards_id"
  end

  create_table "card_labels", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "master_label_colors_id", null: false
    t.bigint "boards_id", null: false
    t.string "label_name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["boards_id"], name: "index_card_labels_on_boards_id"
    t.index ["master_label_colors_id"], name: "index_card_labels_on_master_label_colors_id"
  end

  create_table "cards", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "lists_id", null: false
    t.bigint "admin_user_id", null: false
    t.string "title", null: false
    t.string "description"
    t.string "image"
    t.datetime "start_date"
    t.datetime "deadline_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_user_id"], name: "fk_rails_9c78d3b22d"
    t.index ["lists_id"], name: "index_cards_on_lists_id"
  end

  create_table "cards_labels", id: false, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "card_label_id", null: false
    t.bigint "card_id", null: false
  end

  create_table "lists", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "boards_id", null: false
    t.string "list_name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["boards_id"], name: "index_lists_on_boards_id"
  end

  create_table "master_label_colors", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "color_code", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_icons", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "users_id", null: false
    t.string "icon", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["users_id"], name: "index_user_icons_on_users_id"
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name", null: false
    t.string "email", null: false
    t.text "tokens"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  create_table "users_boards", id: false, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "board_id", null: false
    t.bigint "user_id", null: false
  end

  create_table "users_cards", id: false, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "card_id", null: false
    t.bigint "user_id", null: false
  end

  create_table "users_workspaces", id: false, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "workspace_id", null: false
  end

  create_table "workspaces", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "workspace_name", null: false
    t.string "workcpace_description", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "boards", "users", column: "admin_user_id"
  add_foreign_key "card_comments", "cards", column: "cards_id"
  add_foreign_key "card_comments", "users", column: "users_id"
  add_foreign_key "card_files", "cards", column: "cards_id"
  add_foreign_key "card_labels", "boards", column: "boards_id"
  add_foreign_key "card_labels", "master_label_colors", column: "master_label_colors_id"
  add_foreign_key "cards", "lists", column: "lists_id"
  add_foreign_key "cards", "users", column: "admin_user_id"
  add_foreign_key "lists", "boards", column: "boards_id"
  add_foreign_key "user_icons", "users", column: "users_id"
end
