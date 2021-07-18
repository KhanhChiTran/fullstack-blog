const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
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
    default:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fdefault-avatar-profile-flat-icon-vector-contact-symbol-illustration-image184752213&psig=AOvVaw2Rd10GgpgQq3ilRgi-o45w&ust=1626701123379000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCSvpnc7PECFQAAAAAdAAAAABAK",
  },
})

module.exports = mongoose.model("user", UserSchema)
