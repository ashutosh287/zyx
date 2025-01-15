const mongoose = require("mongoose");
const express = require("express");
const dotenv = require ("dotenv");


const app = express();
const port = 5008;
dotenv.config();


mongoose.connect(process.env.MongodbURL)

.then(()=>{console.log(`mongo db connected`);})
.catch((e)=>{console.log(e);})

app.listen(port,()=>{console.log(`server is running ${port}`);})
