const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override")
const mongoose = require('mongoose');
const indexRoutes = require("./routes/index");

mongoose.connect('mongodb+srv://abdessamie:AN73RFXKPT5m3YU1@cluster0.7ayno.mongodb.net/test',{useNewUrlParser:true}).then(() => {
	console.log('DB connection successfull');
});

const port = process.env.PORT | 3000;
const app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.set('view engine','pug');

app.use('/',indexRoutes);


app.listen(port,()=> console.log(`running on port ${port}...`));
