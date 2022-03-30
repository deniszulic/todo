const Sequelize = require("sequelize");

const sequelize = new Sequelize("todo", "postgres", "admin", {
    dialect: "postgres",
    host: "localhost",
});

module.exports = sequelize;