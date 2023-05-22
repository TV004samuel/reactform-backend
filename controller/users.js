const createPool = require("../database");
const controller = {
  async createUser(req, res) {
    const id = setTimeout(
      () =>
        res.json({
          message: "There was an error with the upstream service!",
        }),
      5000
    );
    try {
      clearTimeout(id);
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
      res.status(500).json({ message: err, status: false });
    }
  },

};

module.exports = controller;
