const express = require("express");
const app = express();
const router = require("./router/users");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use("/user", router);
app.use(cors({
    origin:"*"
}));

app.listen(process.env.SERVERPORT|| 3000, () => {
  console.log("Server running in ", process.env.SERVERPORT);
});
