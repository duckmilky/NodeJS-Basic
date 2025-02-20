import {getAllUser,createUser,deleteUser} from '../modals/CRUD_User'

const getHomePage = async (req, res) => {
    let listUsers = await getAllUser()
    return res.render('home.ejs', {data: listUsers})       
}

const getUserManagerPage = (req, res) => {
    return res.render('user.ejs')
}

const getAddUserPage = (req, res) => {
    res.render('add-user.ejs')
}

const postCreateUser = (req, res) => {
    let name= req.body.name
    let date = req.body.date
    let sex = req.body.sex
    let address = req.body.address
    createUser(name, date, sex, address)
    res.redirect('/')
}

const getDeleteUser = (req, res) => {
    let idUser = req.params.id
    deleteUser(idUser)
    res.redirect('/')
}

module.exports = {
    getHomePage,getUserManagerPage,
    getAddUserPage,postCreateUser,
    getDeleteUser
}