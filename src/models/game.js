const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('Games', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
});

module.exports = User;