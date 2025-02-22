require('dotenv').config()
import express from 'express'
import configViewEngine from './config/viewEngine'
import {initWebRout} from './routes/web'
import {initAPIRoute} from './routes/APIRoute'

const app = express()
const port = process.env.PORT

//Config req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//config view engine
configViewEngine(app)

//init web route
initWebRout(app)

initAPIRoute(app)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})