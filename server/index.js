const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const controller = require("./controller");
const massive = require("massive");

require("dotenv").config();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.get("/api/inventory", controller.read);
app.post("/api/product", controller.create);
app.delete("/api/inventory/:id", controller.delete);
app.put("/api/inventory/:id", controller.update);
app.get("/api/inventory/:id", controller.getOne);

const port = 4000;
app.listen(port, () => {
  console.log(`Big Brother listening localhost:${port}`);
});
