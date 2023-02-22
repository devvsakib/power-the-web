const db = require('../config/db-con');
const sequelize = require('sequelize');
const sessionSchema = db.define('session', {
    id: {
        type: sequelize.DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey:true,
    },
    userId: {
        type: sequelize.DataTypes.INTEGER(),
        allowNull: false
    },
    token: {
        type: sequelize.DataTypes.STRING(),
        allowNull: false,
        unique: true,
    }
}, {
    timestamps: true,
});
module.exports = sessionSchema;