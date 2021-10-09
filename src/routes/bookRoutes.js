const express=require("express");
const booksRouter=express.Router();

function router(nav)
{
   var books=[
                            {
                               title:'Tom and Jerry',
                               author:'Joseph barbera',
                               genre:'Cartoon',
                               img:"tomjerry.JPG"
                            },
                            {
                               title:'Harry Potter',
                               author:'J K Rowling',
                               genre:'Fantasy',
                               img:"harrypotter.jpg"
                            },
                            {
                               title:'Pathummayude aadu',
                               author:'Basheer',
                               genre:'Drama',
                               img:"pathummayudeaadu.jpg"
                            }
                         ]
                        
 booksRouter.get('/',function(req,res)
{
   res.render("books",
   {
      nav,
      title:'Library',
      books
   })
})

booksRouter.get('/:id',function(req,res)
{
  const id= req.params.id
   res.render('book',
   {
      nav,
      title:'Library',
      book:books[id]
   })

   
})
return booksRouter;
}


module.exports=router; 