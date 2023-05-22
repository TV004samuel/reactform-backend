const express = require("express");
const router = express.Router();
const usersController = require("../controller/users");

router.post("/", usersController.createUser);
router.get("/", usersController.deno);


module.exports = router;
