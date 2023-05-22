const express = require("express");
const app = express();
const router = express.Router();
const createPool = require("./database");
require("dotenv").config();

app.use(express.json());



router.post("/", async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    createPool.query(
      `INSERT INTO users (name, email, mobile) VALUES ($1, $2, $3) RETURNING *`,
      [name, email, mobile],
      (err, result) => {
        if (!err) {
          console.log(`Data stored ${JSON.stringify(result.rows[0])}`);
          res.status(200).json({ message: result.rows[0], status: true });
        } else {
          console.log(err);
          res.status(403).json({ message: err, status: false });
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: false });
  }
});

app.use("/user", router);

app.listen(process.env.SERVERPORT || 3000, () => {
  console.log("Server running in ",process.env.SERVERPORT);
});
