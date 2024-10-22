const mongoose=require('mongoose')
require('dotenv').config();
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI)
const db =mongoose.connection;


db.on('error',console.error.bind(console,"error in connecting database"));

db.once('open',function(){
    console.log("database connected successfully");
});

module.exports=db;
