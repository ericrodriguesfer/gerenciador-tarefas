const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

app.use(express.static('public/'));

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get("/", function(require, response){
    response.render("teste/teste");
});

app.listen(3333, () => {
    console.log('aplication was started...');
});