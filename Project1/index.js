const express = require('express');
const PORT = 4000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

//database
const db = require('./config/mongoose');

app.use(expressLayouts);

//use assest

app.use(express.static('./assets'));

//ejs files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));





//routes
app.use('/', require('./routes/csvRoutes'));










//server listening
app.listen(PORT, (err) => {
    if(err) console.log("error listening on", PORT);

    console.log('listening on port', PORT);
})