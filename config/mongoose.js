const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://priya:mongo@cluster0.e2tkfsq.mongodb.net/EmployeeReviewSystem?retryWrites=true&w=majority')
const db =mongoose.connection;

db.on('error',console.error.bind(console,"error in connecting database"));

db.once('open',function(){
    console.log("database connected successfully");
});

module.exports=db;
