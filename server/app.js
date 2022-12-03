const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const app = express();




app.use(express.json())

// //Middleware
// app.use('/', (req, res, next)=> {
//     res.send("This is our starting app")
// })

app.use("/books", router)//localhost:5000/books



mongoose.connect("mongodb+srv://leenamahato:leenamahato@cluster0.cggt4jl.mongodb.net/bookStore?retryWrites=true&w=majority"
).then(()=>console.log("Connected to Database"))
.then(() => {
    app.listen(5000)
}).catch((err)=> console.log(err));





