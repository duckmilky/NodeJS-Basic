import express from 'express'
const router = express.Router()
import {getHomePage,getUserManagerPage} from '../controllers/homeController'

router.get('/', getHomePage)

router.get('/usermanager', getUserManagerPage)

export default router