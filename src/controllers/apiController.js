import {connection} from "../config/database";

const getUsers = async (req, res) => {
    let [results, fields] = await connection.query('select * from Users')
    return res.status(200).json({
        'message': 'success',
        'data': results
    })
}

const createUser = async (req, res) => {
    let {name, date, sex, address} = req.body
    await connection.query(`insert into Users (fullName, dateOfBirth, sex, address) values (?,?,?,?)`, [name, date, sex, address])
    return res.status(200).json({
        'message': 'success'
    })
}

const updateUser = async (req, res) => {
    let id= req.params.id
    let {name, date, sex, address} = req.body
    await connection.query('update Users set fullName = ?, dateOfBirth = ?, sex = ?, address = ? where id = ?', [name, date, sex, address, id])
    return res.status(200).json({
        'message': 'success'
    })
}

const deleteUser = async (req, res) => {
    let id= req.params.id
    await connection.query('delete from Users where id = ?', [id])
    return res.status(200).json({
        'message': 'success'
    })
}

module.exports = {
    getUsers,createUser,updateUser,deleteUser
}