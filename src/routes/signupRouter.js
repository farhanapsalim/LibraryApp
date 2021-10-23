const express =require('express');
const Signupdata = require('../model/signupdata');

const signupRouter=express.Router();

function router(nav)
{

signupRouter.get('/',function(req,res)
{
 
   res.render('signup', 
   {
      nav,
      title:'Library'
      
   })
 

})
signupRouter.post('/add',function(req,res)
{
   const signup=new Signupdata(
      {
        
         username: req.body.username,
         phno: req.body.phno,
         email:req.body.email,
         password:req.body.password,
         confpass:req.body.confpass,
      }
    );
    signup.save((err)=>
  {
    if(err)
    {
      res.json({message:err.message,type:'danger'});
    }
    else
    {                                    
      
      res.redirect('/books');
    }
  })
  
});
// signupRouter.get('/add',function(req,res)
// {
//    res.redirect("/books");
// })

return signupRouter;
}
module.exports=router;