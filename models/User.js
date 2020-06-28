const database = require("../config/database");

const User = database.sequelize.define('users', {
    name: {
        type: database.Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: database.Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    pass: {
        type: database.Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [4, 20]
        }
    }
});

//User.sync({force: true});

module.exports = User;