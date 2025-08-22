const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('eventdb', 'root', 'sruthi' ,{
    host: 'localhost' ,
    dialect: 'mysql' ,
});

module.exports = sequelize;


