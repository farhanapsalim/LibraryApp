
//accessing mongoose package
const mongoose=require('mongoose');

//database connection
mongoose.connect('mongodb://localhost:27017/library');
//mongoose.connect('mongodb+srv://userone:userone@ictakfiles.kj5za.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
//mongodb+srv://userone:<password>@ictakfiles.kj5za.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//schema definition
const Schema=mongoose.Schema;

const AuthorSchema=new Schema(
                            {
                            name:String,
                            description:String,
                            works:String,
                            image:String
                            }
);


//model creation
var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;