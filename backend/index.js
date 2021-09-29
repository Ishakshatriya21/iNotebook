const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();
const app = express();
const port = 5000;

//This commented code below is also known as a route/path
// app.get('/', (req,res)=>{
//     res.send("Hello World!")
// })
app.use(cors());
//express.json will allow us to send request body content as middleware
app.use(express.json());

//Adding routes from the routes folder:
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})