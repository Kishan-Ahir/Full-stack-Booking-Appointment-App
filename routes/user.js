const usercontroller = require("../controllers/user");
const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();

// Parse JSON requests
router.use(bodyParser.json());

//get users request
router.get("/getusers",usercontroller.getuser);

//post user request
router.post("/postuser", usercontroller.postuser);

//delete user request
router.delete("/deleteuser/:userId", usercontroller.deleteuser);

//edit user request
router.delete("/edituser/:userId", usercontroller.edituser);

//get form html request
router.get("/", usercontroller.getform);

module.exports = router;