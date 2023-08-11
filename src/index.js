const express = require('express')
const mongoose = require ('mongoose');
const { route } = require('./routers/router');
mongoose.set('strictQuery', true)
const app = express()
app.use(express.json())



mongoose.connect("mongodb+srv://sanhil143:raisahab12345@sanhildb.kk3knyj.mongodb.net/group16Database")
.then( ()  => console.log("My MongoDB is connected"))
.catch( (err) => console.log(err))


app.use('/ping',(req,res) =>{
    res.send("pong")
} )

app.use('/',route)

app.listen(3000, () => {
    console.log("Express app running on port" + 3000);
})