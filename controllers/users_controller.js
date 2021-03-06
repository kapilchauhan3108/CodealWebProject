const User = require('../models/user'); // Takes the user schema created for DB 

// This is used for Manual Authentication ....
/*
module.exports.profile = function(request , response){
     User.findById(request.cookies.user_id , function(error , user){
        if(error){
        console.log('error : ' ,  error);
        }
        if(user){
            return response.render('user_profile' , {
                title : 'User Profile Page',
                email : user.email,
                userName : user.name
            });
        }else{
            response.redirect('/users/log-in');
        }
     });
} 
*/

module.exports.profile = function(req, res){
   console.log('res locals: ' , res.locals.user);
   return res.render('user_profile', {
       title: 'User Profile',
       email : res.locals.user.email,
       name : res.locals.user.name
   })
}


// Render Sig up Page
module.exports.signup = function(req , res){

   if(req.isAuthenticated()){
      return res.render('user_profile', {
         title: 'User Profile',
         email : res.locals.user.email,
         name : res.locals.user.name
     })
   }
    return res.render('user_signup' , {
        title : 'Sign Up'
    });
}
// Render LOgin Page 

module.exports.login = function(req , res){
   
   if(req.isAuthenticated()){
      return res.render('user_profile', {
         title: 'User Profile',
         email : res.locals.user.email,
         name : res.locals.user.name
     })
   }
    return res.render('user_login' , {
        title : 'User Login'
    });
}

// get the login  data [handling the post request of login Page .....]
module.exports.create = function(req , res){

    if(req.body.password != req.body.confirm_password){
     return res.redirect('back'); // Back to Origin ....
    }
  // User  is coming FRom Modal of DB
   User.findOne({email : req.body.email} , function(error , user){
      if(error){
            console.log('User is nt found '); return ;
      }

      if(!user){
        User.create(req.body , function(error){
          if(error){
             console.log('Error while sign in '); return ;
          }
          return res.redirect('/users/log-in');

        } );
      }else{
        return res.redirect('back'); 
      }
   });
}

// get the sign up data .
// This is used to Manual Authentication 
/*
module.exports.createSession = function(req , res){
  //  Find the User 
     User.findOne( {email : req.body.email} , function(error , user){

        if(error){
          console.log('Error while LOgin ' , error);
        }

        if(user){
           // Check for the User Password
           if(user.password != req.body.password){
              return res.redirect('back');
              
           }else{
              res.cookie('user_id' , user.id); 
              
              
              return res.redirect('/users/profile');
           }
        }else{
           return  res.redirect('back');
        }
     });   
}
*/

// Session is create in Passport.js itself
module.exports.createSession = function(req , res){

 return res.redirect('/users/profile');
}   
    
    
//User Sign Out 

module.exports.signout = function(req, res){
    
   req.logout(); // this feature is given by passport..

    return res.redirect('/');
}    
