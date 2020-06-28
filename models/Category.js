const database = require("../config/database");

const Category = database.sequelize.define('categorys', {
    name: {
        type: database.Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    user: {
        type: database.Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: false,
            isInt: true
        }
    }
});

//Category.sync({force: true});

module.exports = Category;