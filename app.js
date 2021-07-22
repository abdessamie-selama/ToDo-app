const express = require("express");

const app = express();

app.set('view engine','pug');

const indexRoutes = require("./routes/index");
app.use('/',indexRoutes);

const port = 3000;

app.listen(port,()=> console.log(`running on port ${port}...`));
