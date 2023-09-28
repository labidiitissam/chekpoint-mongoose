//1 require express
const express = require('express');


//2 create instance

const app = express();

//4 require dotenv and config

require("dotenv").config()
app.use(express.json());

//6 connectDB

const connectDB = require("./config/connectDB");
connectDB()

// create routes
 app.use("/api/contact",require('./routes/contact'))



//3 port

const PORT = process.env.PORT

//5 create server

app.listen(PORT , error =>{
    error ? console.log(`Fail to connect , ${error}`) :
    console.log(`Server is running on ${PORT}`);  
    
})

