const Sequelize = require('sequelize');
const config = require('./env.config');

const db = new Sequelize('app', config.DB_USER, config.DB_PASSWORD, {
    storage: config.DB_STORAGE,
    dialect: 'sqlite',
    logging: false,
});

module.exports = db;