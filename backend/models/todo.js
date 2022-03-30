const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Todo = sequelize.define("todo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    timestamps: false
});;

module.exports = Todo;
