const Sequelize = require('sequelize');

const db = require('../util/database');

const game = db.define('game',{
    gameId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        unique: true
    },
    totalDraw: Sequelize.INTEGER,
    totalTicket: Sequelize.INTEGER,
    totalUser: Sequelize.INTEGER
});

module.exports = game;