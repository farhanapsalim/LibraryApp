const express =require('express');
 const AuthorData = require('../model/Authordata');

const adminAddAuthorRouter=express.Router();
 const multer=require('multer');


 var storage=multer.diskStorage({
   destination:function(req,file,cb)
    {
      cb(null,'./public/uploads/authoruploads');
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
adminAddAuthorRouter.get('/',function(req,res)
{
   res.render('addAuthor',
   {
     nav,
     title:'Library'
   })
})
adminAddAuthorRouter.post('/add',upload,(req,res)=>
{
   const user=new AuthorData(
      {
        
         name: req.body.name,
         description: req.body.description,
         works:req.body.works,
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
        res.redirect('/authors');
      }
    })
  
  
  });
return adminAddAuthorRouter;
}
module.exports=router;



// const express=require("express");
// const AuthorData = require('../model/Authordata');

// const authorRouter=express.Router();
// //neww
// const multer=require('multer');
// //neww



// var storage=multer.diskStorage({
//    destination:function(req,file,cb)
//     {
//       cb(null,'./public/uploads/authoruploads');
//     },  
//    filename:function(req,file,cb)
//     {
//       cb(null,file.fieldname + "_" + Date.now() + "_" + file.originalname);
//     },
//   });
  
//   var upload=multer({ 
//     storage:storage,
  
//   }).single("image");


// function router(nav)
// {
   
                        
//  authorRouter.get('/',function(req,res)
// {
//    res.render("authors",
//    {
//       nav,
//       title:'Library',
//       authors
//    })
// })

// authorRouter.post('/add',function(req,res)
// {
//    const user=new AuthorData(
//       {
        
//          name: req.body.title,
//          description: req.body.author,
//          works:req.body.genre,
//         image:req.file.filename
//       }
//     );
    
//     user.save((err)=>
//     {
//       if(err)
//       {
//         res.json({message:err.message,type:'danger'});
//       }
//       else
//       {                                    
//         // req.session.message=
//         // {
//         //   type:'success',
//         //   message:"book added successfully"
//         // };
//         res.redirect('/authors');
//       }
//     })
  
  
//   });
// return authorRouter;
// }


// module.exports=router; 