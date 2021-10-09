const express=require("express");

const app=new express();
const port=process.env.PORT||2000;

const nav = [
   {
      link:'/books',name:'Books'
   },
   {
      link:'/authors',name:'Authors'
   },
   {
      link:'/admin',name:'Add Book'
   },
   {
      link:'/adminAddAuthor',name:'Add Author'
   },
   {
      link:'/signin',name:'SignIn'
   },
   {
      link:'/signup',name:'SignUp'
   }

];


const booksRouter=require('./src/routes/bookRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);
const authorRouter=require('./src/routes/authorRoutes')(nav);
const adminAddAuthorRouter=require('./src/routes/adminAddAuthorRoutes')(nav);
const signinRouter=require('./src/routes/signinRoutes')(nav);
const signupRouter=require('./src/routes/signupRouter')(nav);

app.use(express.static('./public'))
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');

app.use('/books',booksRouter);
app.use('/admin',adminRouter);
app.use('/adminAddAuthor',adminAddAuthorRouter);

app.use('/authors',authorRouter)
app.use('/signin',signinRouter)
app.use('/signup',signupRouter)

app.get('/',function(req,res)
{
   res.render("index",
   {
      nav,
      title:'Library'
   
      
   });
});




app.listen(port,()=>{console.log("server ready at"+port)});