import {connection} from "../config/database";


const getAllUser = async (req, res) => {
    let [results, fields] = await connection.query('select * from Users')
    return results
}

const createUser = async (name, date, sex, address) => {
    let [results, fields] = await connection.query(`insert into Users (fullName, dateOfBirth, sex, address) values (?,?,?,?)`, [name, date, sex, address])
    return results
}

const getUserById = async (id) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [id])
    return results
}

const updateUser = async (id, name, date, sex, address) => {
    let [results, fields] = await connection.query('update Users set fullName = ?, dateOfBirth = ?, sex = ?, address = ? where id = ?', [name, date, sex, address, id])
    return results
}

const deleteUser = async (id) => {
    let [results, fields] = await connection.query('delete from Users where id=?', [id])
    return results
}



module.exports = {
    getAllUser,createUser,deleteUser,
    getUserById, updateUser
}