const express =require('express');
const adminAddAuthorRouter=express.Router();

function router(nav)
{
adminAddAuthorRouter.get('/',function(req,res)
{
   res.render('addAuthor',
   {
     nav,
     title:'Library'
   })
})
adminAddAuthorRouter.get('/add',function(req,res)
{
  res.send("hey one author added");  
})
return adminAddAuthorRouter;
}
module.exports=router;