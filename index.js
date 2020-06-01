const express = require('express');

const app = express();

const port = 8000;// Website run on port no 80..

const db = require('./config/mongoose');

// install ejs layput with "npm install express-ejs-layouts"
const expressLayout = require('express-ejs-layouts');

app.use(expressLayout);
app.use('/' , require('./routes'));

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

app.listen(port , function(error){

    if(error){
        console.log(`Error while connecting to port no ${port} : ${error}`);// Called Interpolation
    }

    console.log(`Server is running on ${port}`);
});
