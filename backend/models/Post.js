const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    categories: { type: Array, required: false },
    bgImg: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fdefault-avatar-profile-flat-icon-vector-contact-symbol-illustration-image184752213&psig=AOvVaw2Rd10GgpgQq3ilRgi-o45w&ust=1626701123379000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCSvpnc7PECFQAAAAAdAAAAABAK",
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Post", PostSchema)
