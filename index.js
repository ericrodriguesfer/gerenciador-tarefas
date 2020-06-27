const express = require("express");
const handlebars = require("express-handlebars");
const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./sessions");
const bodyParser = require("body-parser");
const Activity = require("./models/Activity");
const Category = require("./models/Category");
const User = require("./models/User");
const date = require("./utils/date");
const app = express();

app.use(express.static('public/'));

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas das interfaces gráficas ou views

app.get("/", function(require, response){
    localStorage.clear();
    response.render("login/index");
});

app.get("/register/user", function(require, response){
    response.render("register/user/index");
});

app.get("/home", function(require, response){
    if(localStorage.getItem('logon')){
        Activity.findAll({where: {'user': localStorage.getItem('user-id')}, order: [['id', 'DESC']]}).then(function(activitys){
            response.render("home/index", {activitys: activitys});
        });
    }else{
        response.render("login/index");
    }
});

app.get("/register/activity", function(require, response){
    if(localStorage.getItem('logon')){
        Category.findAll({where: {'user': localStorage.getItem('user-id')}}).then(function(categorys){
            response.render("register/activity/index", {categorys: categorys});
        });
    }else{
        response.render("login/index");
    }
});

app.get("/register/category", function(require, response){
    if(localStorage.getItem('logon')){
        response.render("register/category/index");
    }else{
        response.render("login/index");
    }
});

app.get("/error", function(require, response){
    localStorage.clear();
    response.render("erros/error/index");
});

app.get("/erros/login", function(require, response){
    if(localStorage.getItem('error-login'))
        response.render("erros/login/index");
    else
        response.redirect("/error");
});

app.get("/erros/category", function(require, response){
    if(localStorage.getItem('logon'))
        response.render("erros/category/index");
    else 
        response.redirect("/error");
});

app.get("/erros/activity", function(require, response){
    if(localStorage.getItem('logon'))
        response.render("erros/activity/index");
    else 
        response.redirect("/error");
});

app.get("/erros/conclude", function(require, response){
    if(localStorage.getItem('logon'))
        response.render("erros/conclude/index");
    else 
        response.redirect("/error");
});

app.get("/erros/user", function(require, response){
    if(!localStorage.getItem('logon'))
        response.render("erros/user/index");
    else
        response.redirect("/error");
});

//Rotas de funcionamento da aplicação ou backend

app.post("/login", function(require, response){
    User.findOne({where: {'name': require.body.name_login, 'pass': require.body.pass_login}}).then(function(user){
        localStorage.setItem('logon', true);
        localStorage.setItem('user-id', user.id);
        localStorage.setItem('user-name', user.name);
        response.redirect("/home");
    }).catch(function(error){
        localStorage.clear();
        localStorage.setItem('error-login', true);
        response.redirect("/erros/login");
    });
});

app.post("/user/register", function(require, response){
    User.create({
        name: require.body.name_login,
        email: require.body.email_login,
        pass: require.body.pass_login
    }).then(function(){
        response.redirect("/");
    }).catch(function(error){
        response.redirect("/erros/user");
    });
});

app.post("/category/register", function(require, response){
   Category.create({
        name: require.body.category,
        user: localStorage.getItem('user-id')
   }).then(function(){
        response.redirect("/home");
   }).catch(function(error){
        response.redirect("/erros/category");
   });
});

app.post("/activity/register", function(require, response){
    Activity.create({
        title: require.body.title_activity,
        category: require.body.category_activity,
        action: require.body.content_activity,
        date_start: date(),
        date_end: null,
        concluded: false,
        user: localStorage.getItem('user-id')
    }).then(function(){
        response.redirect("/home");
    }).catch(function(error){
        response.redirect("/erros/activity");
    });
});

app.get("/activity/conclude/:id", function(require, response){
    Activity.update({
        date_end: date(),
        concluded: true,
    },{where:{'id': require.params.id}}).then(function(){
        response.redirect("/home");
    }).catch(function(error){
        response.redirect("/erros/conclude");
    });
});

app.get("/logout", function(require, response){
    localStorage.clear();
    response.redirect("/");
});

app.listen(3333, () => {
    console.log('aplication was started...');
});