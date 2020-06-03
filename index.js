const express = require('express');
<<<<<<< HEAD
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
=======
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

// Mongo Store is used to save the session cookie in DB..
const mongoStore = require('connect-mongo')(session);

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store : new mongoStore({
            mongooseConnection : db , // db is exported from mongoose file
            autoRemove : 'disabled'
    },
    function(error){
        if(error){
            console.log('Error in mongo COnnect' , error); 
        }
        

    }
    )
}));

>>>>>>> Passport-Authentication


app.use(passport.initialize());
app.use(passport.session());


app.use(passport.setAuthenticatedUser);
// use express router
app.use('/', require('./routes'));

<<<<<<< HEAD
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
=======
>>>>>>> Passport-Authentication

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
<<<<<<< HEAD
    //console.log(`Server is running on ${port}`);
=======

    console.log(`Server is running on port: ${port}`);
>>>>>>> Passport-Authentication
});
