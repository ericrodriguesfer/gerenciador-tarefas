const Sequelize = require("sequelize");
const sequelize = new Sequelize('activity-manager', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('connection to database was started...');
}).catch(function(error){
    console.log('connection to database was fail...');
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}