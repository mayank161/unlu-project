const Sequelize = require('sequelize');

const db = new Sequelize('unlu','postgres','mayank', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = db;