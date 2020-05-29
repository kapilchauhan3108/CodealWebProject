const express = require('express');

const app = express();

const port = 8000;// Website run on port no 80..

app.listen(port , function(error){

    if(error){
        console.log(`Error while connecting to port no ${port} : ${error}`);// Called Interpolation
    }

    console.log(`Server is running on ${port}`);
});
