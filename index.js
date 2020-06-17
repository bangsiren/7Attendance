const express = require('express');
const exphbs =  require('express-handlebars');
const adminPage = require('./routes/adminProfile')

const app = express()

app.engine('handlebars',exphbs())
app.set('view engine','handlebars');

app.get('/',(req, res)=>{
    res.render('index');
})
app.use('/',adminPage)
app.listen(8080,()=>{
    console.log('Server is running on Port 8080');
})