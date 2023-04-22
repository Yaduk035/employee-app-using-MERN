const express = require("express");
const{getAllUsers, createUsers, loginUser}=require("../controllers/userController");
const router = express.Router();

router.route("/users").get(getAllUsers)

router.route("/user/register").post(createUsers)
router.route("/user/login").post(loginUser)


module.exports = router