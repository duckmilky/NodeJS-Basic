import pool from "../config/database";

const getAllUser = async (req, res) => {
    const [results, fields] = await pool.execute('select * from Users')
    return results
}

module.exports = {
    getAllUser
}