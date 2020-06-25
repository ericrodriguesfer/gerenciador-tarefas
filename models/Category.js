const database = require("../config/database");

const Category = database.sequelize.define('categorys', {
    name: {
        type: database.Sequelize.STRING
    },
    user: {
        type: database.Sequelize.INTEGER
    }
});

//Category.sync({force: true});

module.exports = Category;