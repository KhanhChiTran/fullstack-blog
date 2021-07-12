const express = require("express")

const server = express()

server.use(express.static("ui/build"))

// server.get("/", (req, res) => {
//   res.send("Hello World, Done Basic setup")
// })
server.get("*", (req, res) => {
  res.redirect("/")
})

server.listen(process.env.PORT || 5000, () => console.log("app is running"))
