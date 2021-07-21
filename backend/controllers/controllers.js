const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req, res, next) => {
  console.log(req.method)
  if (req.method !== "POST") {
    res.json({ error: "Not ALLOWED" })
  }
  console.log(JSON.parse(req.headers.data))
  res.json({ message: "success" })
}
// const { email, password, confirmPassword, userName } = req.body

module.exports = { register }
