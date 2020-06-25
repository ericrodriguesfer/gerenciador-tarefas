const database = require("../config/database");

const Activity = database.sequelize.define('activitys', {
    title: {
        type: database.Sequelize.STRING
    },
    category: {
        type: database.Sequelize.STRING
    },
    action: {
        type: database.Sequelize.TEXT
    },
    date_start: {
        type: database.Sequelize.DATE
    },
    date_end: {
        type: database.Sequelize.DATE
    },
    concluded: {
        type: database.Sequelize.BOOLEAN
    },
    user: {
        type: database.Sequelize.INTEGER
    }
});

//Activity.sync({force: true});

module.exports = Activity;

