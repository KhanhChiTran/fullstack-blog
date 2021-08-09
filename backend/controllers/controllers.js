const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req, res, next) => {
  const { username, email, password, confirmpassword } = JSON.parse(
    req.headers.data
  )
  // console.log(username)
  try {
    const user = await User.findOne({ email })
    if (!user) {
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
          }

          // config.jwtKey
        )
        res.json({ token, userId: userData_id })
      })
    } else {
      res.json({ error: email + "already registered" })
    }
    // const user = await new User.save()
  } catch {
    err => console.log(err)
  }
}
// const { email, password, confirmPassword, userName } = req.body
const signIn = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (user) {
      const compare = bcrypt.compare(password, user.password)
      if (compare) {
        const token = jwt.sign(
          {
            email: user.email,
            userName: user.userName,
            id: user._id,
          },
          config.jwtKey,
          { expiresIn: 2592000000 }
        )

        res.json({ token, userId: user._id })
      } else {
        res.json({ error: " The password is not correct" })
      }
    } else {
      res.json({ error: email + " does not registered! please sign up" })
    }
  } catch (e) {
    console.log(e)
  }
}

module.exports = { register, signIn }
