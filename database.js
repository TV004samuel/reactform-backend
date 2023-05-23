const { Pool } = require("pg");

const createPool = new Pool({
  user: "postgres",
  host: "34.94.145.211",
  database: "postgres",
  password: "Tardiverse@123",
  port: 5432,
});

module.exports = createPool;
