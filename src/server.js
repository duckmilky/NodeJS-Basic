require('dotenv').config()
import express from 'express'
import configViewEngine from './config/viewEngine'
import webRouter from './routes/web'

const app = express()
const port = process.env.PORT

//config view engine
configViewEngine(app)

//declare route
app.use(webRouter)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})