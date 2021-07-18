const User = require("../models/model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req, res, next) => {}
const { email, password, confirmPassword, userName } = req.body
