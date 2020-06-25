const express = require("express");
const handlebars = require("express-handlebars");
const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./scratch");
const app = express();

app.use(express.static('public/'));

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get("/", function(require, response){
    localStorage.clear();
    response.render("login/index");
});

app.get("/register/user", function(require, response){
    localStorage.setItem('logon', true);
    response.render("register/user/index");
});

app.get("/home", function(require, response){
    if(localStorage.getItem('logon'))
        response.render("home/index");
    else 
        response.render("login/index");
});

app.get("/register/activity", function(require, response){
    response.render("register/activity/index");
});

app.get("/register/category", function(require, response){
    response.render("register/category/index");
});

app.listen(3333, () => {
    console.log('aplication was started...');
});