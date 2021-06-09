const Sequelize = require('sequelize');

const db = require('../util/database');

const ticket = db.define('ticket',{
     ticketId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
     },
     gameId: Sequelize.INTEGER,
     userName: Sequelize.STRING
});

module.exports = ticket;