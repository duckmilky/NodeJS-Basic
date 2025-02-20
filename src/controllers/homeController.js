import {getAllUser} from '../modals/CRUD_User'

const getHomePage = async (req, res) => {
    let listUsers = await getAllUser()
    return res.render('home.ejs', {data: listUsers})       
}

const getUserManagerPage = (req, res) => {
    return res.render('user.ejs')
}

module.exports = {
    getHomePage,getUserManagerPage
}