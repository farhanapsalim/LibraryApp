
//accessing mongoose package
const mongoose=require('mongoose');

//database connection
mongoose.connect('mongodb://localhost:27017/library');
//mongoose.connect('mongodb+srv://userone:userone@ictakfiles.kj5za.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
//mongodb+srv://userone:<password>@ictakfiles.kj5za.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//schema definition
const Schema=mongoose.Schema;

const BooksSchema=new Schema(
                            {
                            title:String,
                            author:String,
                            genre:String,
                            image:String
                            }
);


//model creation
var Bookdata=mongoose.model('bookdata',BooksSchema);
module.exports=Bookdata;