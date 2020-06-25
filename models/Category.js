const database = require("../config/database");

const Category = database.sequelize.define('categorys', {
    name: {
        type: database.Sequelize.STRING
    }
});

//Category.sync({force: true});

module.exports = Category;