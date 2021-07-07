const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('myschooldb', 'root', 'leohaha99', {
    host: 'localhost',
    dialect: 'mysql',
    logging: null
});

module.exports = sequelize;