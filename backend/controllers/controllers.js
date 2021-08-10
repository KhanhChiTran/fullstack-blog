const User = require("../models/User")
const Post = require("../models/Post")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const db = require("../config/db")

const register = async (req, res, next) => {
  const { userName, email, password, confirmpassword } = req.body.data
  console.log(userName)
  try {
    const user = await User.findOne({ email })
    console.log(user)
    if (!user) {
      const hashPass = await bcrypt.hash(password, 10)
      const newUser = new User({
        userName,
        email,
        password: hashPass,
      })
      newUser.save((err, userData) => {
        if (err) console.log(err)
        const token = jwt.sign(
          {
            email,
            userName,
          },
          process.env.TOKEN_SECRET
        )
        res.json({ token })
      })
    } else {
      res.json({ error: email + " already registered" })
    }
    // const user = await new User.save()
  } catch {
    err => console.log(err)
  }
}
// const { email, password, confirmPassword, userName } = req.body
const login = async (req, res) => {
  const { email, password } = req.headers
  console.log(email)
  try {
    const user = await User.findOne({ email })
    console.log(user)
    if (user) {
      const compare = bcrypt.compare(password, user.password)
      if (compare) {
        const token = jwt.sign(
          {
            email: user.email,
            userName: user.userName,
            id: user._id,
          },
          process.env.TOKEN_SECRET,
          { expiresIn: "18000s" }
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
const createPost = async (req, res) => {
  const { title, content, token } = req.body.data
  const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
  console.log(decoded)
  try {
    if (decoded) {
      // const newDB = db.useDB(decoded.userName)

      const newPost = new Post({
        title,
        content,
        author: decoded.userName,
      })
      newPost.save((err, post) => {
        if (err) console.log(err)

        res.json({ message: "POST SUCCESS" })
      })
    }
  } catch (error) {
    console.log(error)
  }
}
const getAllPosts = async (req, res) => {
  // const { title, content, token } = req.body.data
  // const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
  // console.log(decoded)
  try {
    const allPosts = await Post.find()
    console.log(allPosts)

    res.json({ message: "SUCCESS", allPosts })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { register, login, createPost, getAllPosts }
