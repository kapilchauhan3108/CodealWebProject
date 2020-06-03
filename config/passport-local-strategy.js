const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// Authentication using Password 
//-------------------------------------
passport.use(new LocalStrategy({ // For Us email is UserName
   userNameField : 'email'
   },
   function(email, password, done){
   // find the user and establish identity..
   User.findOne({email : email} ,function(error , user){  
     if(error){
         console.log('error in finding User');
         return done(error);
     }
     if(!user || user.password != password){
         console.log('Invalid UserName or Password');
         return done(null , false); //1st one is error .. 2nd Argument is for authentication which is false in this case
     }
     return done(null , user);
   });
   }
) );
//--------------------------------------------
// Serialzing the user , to decide which key is to be kept in cookies

// From Above function we are getting the user , by 'Serializing User' , we are serialzing cookies , which wil be used by Browser and with "Deserialzing" we are getting the user back .
passport.serializeUser(function(user , done){

    done(null , user.id); // User is already passed , so now userId will be encripted . This function automatically encript it to cookie
});

// Deserialzing the user from the key in the cookies

passport.deserializeUser(function(id ,done){
    User.findById(id , function(error , user){
    if(error){
      console.log('Error in finding user' , error);
      return done(error);
    }
    return done(null , user);
    // From Above function we are getting the user , by u
    });
});


module.exports = passport;

