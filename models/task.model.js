const { DataTypes, Model } = require('sequelize');
const db = require('../config/database.config');

class TaskModel extends Model {}

TaskModel.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isDone: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize: db,
        tableName: 'Tasks',
    }
);

module.exports = TaskModel;