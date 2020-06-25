var dateNow = new Date();

var turnBackDate = function(){
    return dateNow.getFullYear() + '/' + (dateNow.getMonth() + 1) + '/' + dateNow.getDate();
};

module.exports = turnBackDate;