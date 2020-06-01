module.exports.home = function(request , response){

return response.render('home' , {
    title : 'Home page'
});

//return response.end('<h1> Home  Page </h1>');
}   


