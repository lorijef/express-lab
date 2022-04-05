const express = require("express")
const app = express()
const PORT = 3000

const magicBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
let randomAnswers = magicBall[Math.floor(Math.random() * magicBall.length)]

app.get('/greeting/:name', (req, res) => {
    res.send('Wow! Hello there, ' + req.params.name)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send('Your tip is: ' + parseInt((req.params.tipPercentage/100)*req.params.total))
})

app.get('/magic/:id', (req, res) => {
    res.send(`
       <html>
           <body>
           <br>
                <p>${req.params.id}?</p>
                <h1>${randomAnswers}</h1>
           </body>
       </html>
     `)
})

app.listen(PORT, () => {
    console.log("Listening to the port...")
})

