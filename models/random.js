const Sequelize = require('sequelize');

const db = require('../util/database');

const random = db.define('random',{
    gameId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    one: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = random;