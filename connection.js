const mongoose = require('mongoose');

const connectDB = async ()=>{
   await mongoose.connect('mongodb://127.0.0.1:27017/gtl2', 
   {useNewUrlParser: true,
    useUnifiedTopology: true
})
 console.log('DB connected');

}

module.exports = connectDB;