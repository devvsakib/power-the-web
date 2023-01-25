const db = require('../config/db-con');
const sequelize = require('sequelize');

const userSchema = db.define('users',{
    id: {
        type: sequelize.DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey:true,
    },
    profile_pic:{
        type: sequelize.DataTypes.STRING(),
        defaultValue: "default.png"
    },
    username: {
        type: sequelize.DataTypes.STRING(),
        allowNull: false
    },
    email: {
        type: sequelize.DataTypes.STRING(),
        allowNull: false,
        unique: true,
    },
    password:{
        type: sequelize.DataTypes.STRING(),
        allowNull: false,
    }
}, {
    timestamps: true,
    paranoid: true
})
module.exports = userSchema;