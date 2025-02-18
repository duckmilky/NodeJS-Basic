require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')

const app = express()
const port = process.env.PORT

configViewEngine(app)

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/test', (req, res) => {
    res.render('home.ejs')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})