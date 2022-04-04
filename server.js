const express = require("express")
const { read } = require("fs")
const app = express()
const PORT = 3000

app.get("/greeting/:name", (req, res) => {
    res.send('Wow! Hello there, ' + req.params.name)
})

app.listen(PORT, () => {
    console.log("Listening to the port...")
})