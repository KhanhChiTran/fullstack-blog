// const User = require("../models/userSchema")
// const createError = require("http-errors")
// const jwt = require("jsonwebtoken")
// const jwtKey = require("../config/env").jwtKey
// const auth = token => async (req, res, next) => {
//   const decoded = jwt.verify(token, "hello")
//   try {
//     if (decoded) {
//       const user = await User.findById(decoded.id)
//       if (!user) throw new createError.NotFound()
//       req.user = user
//       req.token = token
//     } else {
//       throw new createError.NotFound()
//     }
//   } catch (e) {
//     next(e)
//   }

//   next()
// }

// module.exports = auth
