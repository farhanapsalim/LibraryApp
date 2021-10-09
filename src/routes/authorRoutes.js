const express=require("express");
const authorRouter=express.Router();

function router(nav)
{
   var authors=[
                            {
                              
                               author:'Joseph barbera',
                               details:'American animator, director, producer, storyboard artist, and cartoon artist',
                               img:"tom.JPG"
                            },
                            {
                              
                               author:'J K Rowling',
                               details:' British author, philanthropist, film producer, television producer, and screenwriter.',
                               img:"harry.jpg"
                            },
                            {

                               author:'Basheer',
                               details:'independence activist and writer of Malayalam literature',
                               img:"basheer.jpg"
                            }
                         ]
                        
 authorRouter.get('/',function(req,res)
{
   res.render("authors",
   {
      nav,
      title:'Library',
      authors
   })
})

authorRouter.get('/:id',function(req,res)
{
  const id= req.params.id
   res.render('author',
   {
      nav,
      title:'Library',
      author:authors[id]
   })

   
})
return authorRouter;
}


module.exports=router; 