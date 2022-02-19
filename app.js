const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");

const apiRoutes = require('./src/modules/routes/routes');

app.use(cors());

const url = "mongodb+srv://User:Restart987@cluster0.mttvv.mongodb.net/TestDB?retryWrites=true&w=majority";
mongoose.connect(url);

app.use(express.json());
app.use('/', apiRoutes);

const port = 5500;
app.listen(port, () => {
  console.log('Example app listening on ' + port);
});
