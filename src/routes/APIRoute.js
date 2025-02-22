import express from 'express'
import {getUsers,createUser,updateUser,deleteUser} from '../controllers/apiController'
const router = express.Router()

const initAPIRoute = (app) => {
    router.get('/users', getUsers)
    router.post('/create-user', createUser)
    router.put('/update-user/:id', updateUser)
    router.delete('/delete-user/:id', deleteUser)
    return app.use('/api/v1/', router)
}


module.exports = {
    initAPIRoute
}   