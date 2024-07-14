const express = require('express');
const mongoose = require('mongoose');
const app=express();
const userRoutes=require('../backend/routes/user.route');
app.use(express.json());


// Configs
const port=4000;
// Routes 
app.use('/userapi/',userRoutes);

app.get('/',(req,res)=>{
    res.send("Api is Working");
})
// Database Connection 
mongoose.connect('mongodb://127.0.0.1:27017/crudapp')
.then(()=>{
    app.listen(port, ()=>{
        console.log("Listening on port",port);
    })
    console.log("Database Connected")
})
.catch(()=>{
    console.log("Database Connection failed");
});

