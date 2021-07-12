const express = require("express")

const server = express()

server.get("/", (req, res) => {
  res.send("Hello World, Done Basic setup")
})

server.listen(5000, () => console.log("app is running"))
