const express =require('express');
const signinRouter=express.Router();

function router(nav)
{

signinRouter.get('/',function(req,res)
{
 
   res.render('signin', 
   {
      nav,
      title:'Library'
      
   })
 

})
signinRouter.get('/add',function(req,res)
{
  res.send("you are successfully logged in");  
})

return signinRouter;
}
module.exports=router;