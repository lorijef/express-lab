const express = require("express")
const app = express()
const PORT = 3000

app.get("/greeting/:name", (req, res) => {
    res.send('Wow! Hello there, ' + req.params.name)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send('Your tip is: ' + parseInt((req.params.tipPercentage/100)*req.params.total))
})

app.listen(PORT, () => {
    console.log("Listening to the port...")
})

