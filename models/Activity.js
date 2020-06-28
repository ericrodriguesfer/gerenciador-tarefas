const database = require("../config/database");

const Activity = database.sequelize.define('activitys', {
    title: {
        type: database.Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    category: {
        type: database.Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    action: {
        type: database.Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    date_start: {
        type: database.Sequelize.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: true,
            isDate: true
        }
    },
    date_end: {
        type: database.Sequelize.DATEONLY,
        allowNull: true,
        validate: {
            notEmpty: true,
            isDate: true
        }
    },
    concluded: {
        type: database.Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true,
            isInt: true
        }
    },
    user: {
        type: database.Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isInt: true
        }
    }
});

//Activity.sync({force: true});

module.exports = Activity;

