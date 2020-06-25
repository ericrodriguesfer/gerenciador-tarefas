const turnBackDate = require("./date");

var dateNow = new Date();

var turnBackDateBr = function(data){
    var dataBrazilian = data.split("/");

    dataBrazilian[2] < 10 ? dataBrazilian[2] = '0' + dataBrazilian[2] : dataBrazilian[2] = dataBrazilian[2];
    dataBrazilian[1] < 10 ? dataBrazilian[1] = '0' + dataBrazilian[1] : dataBrazilian[1] = dataBrazilian[1];

    return (dataBrazilian[2] + '/' + dataBrazilian[1] + '/' + dataBrazilian[0]);
};

module.exports = turnBackDateBr;