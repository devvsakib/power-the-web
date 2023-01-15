//qqH1eYX4Gtbi1gON

const express=require("express");
const mongoose=require("mongoose");
const router=require('./routes/book-routes');
const app=express();
const cors=require('cors')

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use("/books",router)


mongoose.connect("mongodb+srv://Anoosh:Doubleclick@cluster0.xpmezsj.mongodb.net/?retryWrites=true&w=majority"
)
.then(()=>console.log("Connected to database"))
.then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));
