const { Pool } = require("pg");

const createPool = new Pool({
  user: "postgres",
  host: "34.122.22.106",
  database: "postgres",
  password: "zZgeh;HJ-@Dom7Ex",
  port: 5432,
});

module.exports = createPool;
