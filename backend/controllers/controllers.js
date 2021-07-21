const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req, res, next) => {
  const { username, email, password, confirmpassword } = JSON.parse(
    req.headers.data
  )
  try {
    const user = await User.findOne({ email })
    if (!user) {
      if (password === confirmpassword) {
        const hashPass = await bcrypt.hash(password, 10)
        new User({
          username: username,
          email: email,
          password: hashPass,
        }).save((err, userData) => {
          if (err) console.log(err)
          const token = jwt.sign(
            {
              username,
              email,
              id: userData._id,
            },
            config.jwtKey
          )
          res.json({ token, userId: userData_id })
        })
      } else {
        res.jon({ error: "Please confirm the password" })
      }
    } else {
      res.json({ error: email + "already registered" })
    }
    // const user = await new User.save()
  } catch {
    err => console.log(err)
  }
}
// const { email, password, confirmPassword, userName } = req.body

module.exports = { register }
