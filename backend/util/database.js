const Sequelize = require("sequelize");

const sequelize = new Sequelize("todo", "postgres", "admin", {
    dialect: "postgres",
    host: "localhost",
    port: '5431'
});

module.exports = sequelize;