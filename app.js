const express = require("express");
const app = express();
const router = require("./router/users")
require("dotenv").config();

app.use(express.json());
app.use("/user", router);


app.listen(process.env.SERVERPORT || 3000, () => {
  console.log("Server running in ",process.env.SERVERPORT);
});
