const express = require("express")
const mongoose = require("mongoose")
const db = require("./backend/config/db")
// const cors = require("cors")
const app = express()

// app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
db.connect()
// app.get("/login/:user", controller.login)
// app.post("/register", controller.register)
// app.post(route, controller)

app.listen(process.env.PORT || 5000, () => console.log("app is running"))
