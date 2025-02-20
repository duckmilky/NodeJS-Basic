import express from 'express'
import {getHomePage,getUserManagerPage} from '../controllers/homeController'
const router = express.Router()

const initWebRout = (app) => {
    router.get('/', getHomePage)
    router.get('/usermanager', getUserManagerPage)

    return app.use('/', router)
}


module.exports = {
    initWebRout
}   