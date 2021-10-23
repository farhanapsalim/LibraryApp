const express=require("express");
const booksRouter=express.Router();

const Bookdata=require('../model/Bookdata');

////
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/bookuploads',
  filename: function(req, file, cb){
    cb(null,file.originalname);
  }
});
// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('image');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}
////



function router(nav)
{
   // var books=[
   //                          {
   //                             title:'Tom and Jerry',
   //                             author:'Joseph barbera',
   //                             genre:'Cartoon',
   //                             img:"tomjerry.JPG"
   //                          },
   //                          {
   //                             title:'Harry Potter',
   //                             author:'J K Rowling',
   //                             genre:'Fantasy',
   //                             img:"harrypotter.jpg"
   //                          },
   //                          {
   //                             title:'Pathummayude aadu',
   //                             author:'Basheer',
   //                             genre:'Drama',
   //                             img:"pathummayudeaadu.jpg"
   //                          }
   //                       ]
                        
 booksRouter.get('/',function(req,res)
{
  Bookdata.find()
  .then(function(books)
  {

   res.render("books",
   {
      nav,
      title:'Library',
      books
   });
  })
   
});

booksRouter.get('/:id',function(req,res)
{
  const id= req.params.id
  Bookdata.findOne({_id:id})
  .then(function(book)
  {
   res.render('book',
   {
      nav,
      title:'Library',
      book
   });
  })
 
})

/* GET SINGLE User BY ID */
booksRouter.get('/updatebook/:id', function(req, res) {
  res.render('updatebook',{Bookdata:req.params.id,
   nav,
   title:'Library',
 })
   });

   booksRouter.post('/updatebook/:id',function(req,res){
     
       /* UPDATE User */
     
           upload(req, res, (err) => {
        var item={ 
          title: req.body.title,
           author: req.body.author,
           genre: req.body.genre,
           image: req.file.filename
        }
           
           
         Bookdata.findByIdAndUpdate(req.params.id, item, function(err) {
             if (err) {
                 res.redirect('updatebook/' + req.params.id);
             } else {
                 res.redirect('/books')
             }
           });  
       });
   });    




//delete
booksRouter.get('/delete/:id', function(req, res) {
 
  Bookdata.findByIdAndRemove(req.params.id, function(err, project) {
      if (err) {
          res.redirect('/books');
      } else
      {
          res.redirect('/books');
      }
  });
});


return booksRouter;
}


module.exports=router; 