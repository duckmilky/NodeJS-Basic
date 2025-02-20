import connection from "../config/database";

const getAllUser = async (req, res) => {
    let [results, fields] = await connection.query('select * from Users')
    return results
}

const createUser = async (name, date, sex, address) => {
    let [results, fields] = await connection.query(`insert into Users (fullName, dateOfBirth, sex, address) values (?,?,?,?)`, [name, date, sex, address])
    return results
}

module.exports = {
    getAllUser,createUser
}