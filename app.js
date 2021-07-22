const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','pug');

const indexRoutes = require("./routes/index");
app.use('/',indexRoutes);

const port = 3000;

app.listen(port,()=> console.log(`running on port ${port}...`));
