const { Pool } = require("pg");

const createPool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "demo1",
  password: "12345678",
  port: 5432,
});

module.exports = createPool;
