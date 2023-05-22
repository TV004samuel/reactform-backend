const { Pool } = require("pg");

const createPool = new Pool({
  user: "postgres",
  host: "34.122.22.106",
  database: "test01",
  password: "Tardiverse@123",
  port: 5432,
});

module.exports = createPool;
