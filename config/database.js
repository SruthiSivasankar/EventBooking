const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('eventdb', 'root', 'sruthi' ,{
    host: 'localhost' ,
    dialect: 'mysql' ,
});

module.exports = sequelize;

// const mysql = require('mysql2/promise');
// const { Sequelize } = require('sequelize');

// const DB_NAME = 'eventdb';
// const DB_USER = 'root';
// const DB_PASS = 'sruthi';
// const DB_HOST = 'localhost';

// async function initDatabase() {
//   const connection = await mysql.createConnection({ host: DB_HOST, user: DB_USER, password: DB_PASS });

//   await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
//   console.log(`Database ${DB_NAME} checked/created`);

//   const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
//     host: DB_HOST,
//     dialect: 'mysql',
//   });

//   return sequelize;
// }

// module.exports = initDatabase;


