const express = require('express');
const app = express();
const port = 8000;// Website run on port no 80..
const db = require('./config/mongoose');
//------- Used for Passport Authentication
const session = require('express-session');
const passport = require('passport');
const passportLocal  = require('./config/passport-local-strategy');
//---------------------------------------------
// install ejs layput with "npm install express-ejs-layouts"
const expressLayout = require('express-ejs-layouts');

app.use(expressLayout);

// Extract style and scripts from sub oage into layouts 
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);

// Use Express Router 
app.use('/' , require('./routes/index')); // for Any request in Url router /index will be called


// setup static file ..
app.use(express.static('./assets') );


// Set up the View 
app.set('view engine' , 'ejs');
app.set('views' , './views');

//---------Used for the passport Authentication ---------
app.use(session({
    name : 'codeial',
    // CHange secret before deployment 
    secret : 'somthing',
    saveUninitialized : false,
    resave : false ,
    cookie : {
        MaxAge : (1000 * 60 * 100)
    }
    
}));

app.use(passport.initialize());
app.use(passport.session());

//-------------------------------------------------

app.listen(port , function(error){

    if(error){
        console.log(`Error while connecting to port no ${port} : ${error}`);// Called Interpolation
    }
    //console.log(`Server is running on ${port}`);
});
