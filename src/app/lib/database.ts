import mysql from 'mysql2/promise'

const dbConn = mysql.createPool({
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
})

export default dbConn
