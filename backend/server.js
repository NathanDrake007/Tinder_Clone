const express = require("express");
const mongoose = require("mongoose");
// const User = require( "./models/User.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/AuthRoutes");

const connection_url =
  "mongodb://admin:Kf5Id3WX6IpxsIYF@cluster0-shard-00-00.c3wik.mongodb.net:27017,cluster0-shard-00-01.c3wik.mongodb.net:27017,cluster0-shard-00-02.c3wik.mongodb.net:27017/tinderdb?ssl=true&replicaSet=atlas-ltu8ck-shard-0&authSource=admin&retryWrites=true&w=majority";

//App config Kf5Id3WX6IpxsIYF
const app = express();
const port = process.env.port | 8001;
//Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors());
//MongoDB config
mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((_) => console.log("connected to database"));

//Listeners
app.listen(port, () => console.log(`listening to port ${port}`));
app.use(authRoutes);
