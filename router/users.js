const express = require("express");
const router = express.Router();
const usersController = require("../controller/users");

router.post("/", usersController.createUser);
router.post("/", usersController.deno);


module.exports = router;
