var express = require('express');
var router = express.Router();

const { register, login, profile } = require("../controllers/userController")

/* /users */
router.get("/register", register);
/* http://localhost:3000/users/register */

router.get("/login", login);
/* http://localhost:3000/users/login */

router.get("/profile", profile);
/* http://localhost:3000/users/profile */



/* '/', function(req, res, next) {
res.send('respond with a resource');
}); */

module.exports = router;
