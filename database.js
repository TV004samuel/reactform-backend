const { Pool } = require("pg");

const createPool = new Pool({
  user: "postgres",
  host: "35.236.65.90",
  database: "postgres",
  password: "Tardiverse@123",
  port: 5432,
});

module.exports = createPool;
