const database = require("../config/database");

const User = database.sequelize.define('users', {
    name: {
        type: database.Sequelize.STRING
    },
    email: {
        type: database.Sequelize.STRING
    },
    pass: {
        type: database.Sequelize.STRING
    }
});

//User.sync({force: true});

module.exports = User;