import express from 'express'
import {getHomePage,getUserManagerPage,postCreateUser,getAddUserPage} from '../controllers/homeController'
const router = express.Router()

const initWebRout = (app) => {
    router.get('/', getHomePage)
    router.get('/usermanager', getUserManagerPage)
    router.get('/add-user', getAddUserPage)
    router.post('/create-user', postCreateUser)
    return app.use('/', router)
}


module.exports = {
    initWebRout
}   