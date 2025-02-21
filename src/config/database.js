import mysql from 'mysql2/promise'
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usermanager',
    port: '3306',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

// Kiểm tra kết nối
// const testConnection = async() => {
//     try {
//         const conn = await connection.getConnection();
//         console.log('✅ Connected to MySQL successfully!');
//         conn.release(); // Giải phóng kết nối sau khi kiểm tra
//         return true
//     } catch (error) {
//         console.error('❌ Failed to connect to MySQL:', error.message);
//         return false
//     }
// }

module.exports = {
    connection
}