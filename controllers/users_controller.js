const User = require('../models/user'); // Takes the user schema created for DB 

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

//User Sign Out 

module.exports.signout = function(req, res){
    console.log('sign Out Called');
    req.cookies(user_id, '');
    return res.redirect('users/log-in');
}


// Render Sig up Page
module.exports.signup = function(req , res){
    return res.render('user_signup' , {
        title : 'Sign Up'
    });
}
// Render LOgin Page 

module.exports.login = function(req , res){
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

// get the sign up data . [This is used to Manual Authentication]
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

// Create Session for User ...for Passport Authentication ..


module.exports = router ;