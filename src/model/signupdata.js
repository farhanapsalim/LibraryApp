
//accessing mongoose package
const mongoose=require('mongoose');

//database connection
//mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.kj5za.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
//mongodb+srv://userone:<password>@ictakfiles.kj5za.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//schema definition
const Schema=mongoose.Schema;

const SignupSchema=new Schema(
                            {
                            username:String,
                            phno: Number,
                            email:String,
                            password:String,
                            confpass:String
                            }
);


//model creation
var Signupdata=mongoose.model('signupdata',SignupSchema);
module.exports=Signupdata;
