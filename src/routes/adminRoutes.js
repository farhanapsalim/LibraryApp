const express =require('express');
const Bookdata = require('../model/Bookdata');
const adminRouter=express.Router();

//neww
const multer=require('multer');
//neww







//new --for image upload


var storage=multer.diskStorage({
  destination:function(req,file,cb)
   {
     cb(null,'./public/uploads/bookuploads');
   },  
  filename:function(req,file,cb)
   {
     cb(null,file.fieldname + "_" + Date.now() + "_" + file.originalname);
   },
 });
 
 var upload=multer({ 
   storage:storage,
 
 }).single("image");




function router(nav)
{

  
adminRouter.get('/',function(req,res)
{
   res.render('addBook',
   {
     nav,
     title:'Library',
     
   })
})
// adminRouter.get('/',function(req,res)
// {
//   const id1= req.params.id
//   Bookdata.findOne({_id:id1})
//   .then(function(addBook)
//   {
//    res.render('addBook',
//    {
//       nav,
//       title:'Library',
//       addBook
//    });
//   })
 
// })


// adminRouter.get('/:id',function(req,res)
// {
//   const id1= req.params.id
//   Bookdata.findOne({_id:id1})
//   .then(function(addBook)
//   {
//    res.render('addBook',
//    {
//       nav,
//       title:'Library',
//       addBook,
      
//    });
//   })
//   // title: res.body.title,
//   //     author: res.body.author,
//   //     genre:res.body.genre,
//   //     image:res.file.filename
 
// })

//insert a user into database
adminRouter.post('/add',upload,(req,res)=>
{
  const user=new Bookdata(
    {
      
      title: req.body.title,
      author: req.body.author,
      genre:req.body.genre,
      image:req.file.filename
    }
  );
  
  user.save((err)=>
  {
    if(err)
    {
      res.json({message:err.message,type:'danger'});
    }
    else
    {                                    
      // req.session.message=
      // {
      //   type:'success',
      //   message:"book added successfully"
      // };
      res.redirect('/books');
    }
  })


});

//neww

return adminRouter;
}
module.exports=router;