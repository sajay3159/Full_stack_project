const mongoose = require('mongoose');

const DB = "mongodb+srv://sahaniajay884:2mG9qyExWnk0HRoV@cluster0.mtlqfjl.mongodb.net/My_blog?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB , {
  useNewUrlParser : true ,
//    useCreateIndex : false, 
    useUnifiedTopology : true 
   // useFindAndModify : false
}).then(() => {
   console.log("connection successful");
}).catch((err) => console.log('no connection'));


// mongoose.connect("mongodb://localhost:27017/e-comm");
// const DB = "mongodb://localhost:27017/e-comm"
// mongoose.connect(DB , {
//   useNewUrlParser : true ,
// //    useCreateIndex : false, 
//     useUnifiedTopology : true 
//    // useFindAndModify : false
// }).then(() => {
//    console.log("connection successful");
// }).catch((err) => console.log('no connection'));
