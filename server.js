const express = require('express');
const cors = require('cors');
const connectDB = require('./connection')
const port = 4000;
let Cdata = require('./data.model')
const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    Cdata.findOne({Country_Region: 'Ghana'},(err,data)=>{
        return res.json(data)
    })
})

connectDB();
app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})
