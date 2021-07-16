// import path from "path"
// import fs from "fs"

// import React from "react"
// import ReactDOMServer from "react-dom/server.js"
// import App from "./ui/src/App.js"
// import "babel-register"
const express = require("express")

const server = express()

server.use(express.static("ui/build"))
server.use(express.urlencoded({ extended: true }))

// server.get("/", (req, res) => {
//   const app = ReactDOMServer.renderToString(App)
//   const indexFile = path.resolve("./ui/build/index.html")
//   fs.readFile(indexFile, "utf8", (err, data) => {
//     if (err) res.status(500).send("<h1>Something gona wroong</h1>")
//     res.send(indexFile)
//   })
// })
server.get("*", (req, res) => {
  res.redirect("/")
})

server.listen(process.env.PORT || 5000, () => console.log("app is running"))
