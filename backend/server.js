import express from "express";
import mongoose from "mongoose";
import Card from "./dbCards.js";
import Cors from "cors";
const connection_url =
  "mongodb://admin:Kf5Id3WX6IpxsIYF@cluster0-shard-00-00.c3wik.mongodb.net:27017,cluster0-shard-00-01.c3wik.mongodb.net:27017,cluster0-shard-00-02.c3wik.mongodb.net:27017/tinderdb?ssl=true&replicaSet=atlas-ltu8ck-shard-0&authSource=admin&retryWrites=true&w=majority";
//App config Kf5Id3WX6IpxsIYF
const app = express();
const port = process.env.port | 8001;

//Middlewares
app.use(express.json());
app.use(Cors());
//MongoDB config
mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((_) => console.log("connected to database"));
//Api endpoints
app.get("/", (req, res) => res.status(200).send("HELLO WORLD"));

app.post("/tinder/card", (req, res) => {
  const dbCard = req.body;
  Card.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/card", (req, res) => {
  Card.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listeners
app.listen(port, () => console.log(`listening to port ${port}`));
