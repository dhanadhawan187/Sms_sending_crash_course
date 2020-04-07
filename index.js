const express = require("express");
app = express();

const api = require("./public/api.js");

//static file
app.use(express.static("public"));

//middle-ware
//app.use(bodyParser.json());

//get the values from form
/*app.post("/response", (res, req) => {
  //res.send(req.body);
  res.send("post");
  console.log("post");
});*/
/*
app.get("/", (req, res) => {
  res.send("hello world");
});

*/

app.use("/", api);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server started${PORT}`);
});
