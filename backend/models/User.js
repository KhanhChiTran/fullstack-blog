const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default: "https://icon-library.com/images/icon-avatar/icon-avatar-0.jpg",
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("User", UserSchema)
