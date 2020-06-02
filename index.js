const express = require('express');
const app = express();
const port = 8000;// Website run on port no 80..

const cookieParser = require('cookie-parser'); // Installed Package with npm install cookie-parser

const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use(cookieParser());

// install ejs layput with "npm install express-ejs-layouts" To Avoid creating a new page everttime just using existing templates and binding them
const expressLayout = require('express-ejs-layouts');

app.use(expressLayout);
app.use('/' , require('./routes'));

// Extract style and scripts from sub page into head section of Layout
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);

// setup static file ..
app.use(express.static('./assets') );

// Set up the View 
app.set('view engine' , 'ejs');
app.set('views' , './views');


// Use Express Router . Routing all the functionalites to Index.js of Router folder ..
app.use('/' , require('./routes/index')); // for Any request in Url router /index will be called [./ means go back one step in folder structure]



app.listen(port , function(error){

    if(error){
        console.log(`Error while connecting to port no ${port} : ${error}`);// Called Interpolation
    }

    console.log(`Server is running on ${port}`);
});
