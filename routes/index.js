const express = require('express');
const router = express.Router();

const {home} = require ("../controllers/indexController")

/* / */
router.get("/", home);
/* http://localhost:3000/home */
router.get("/home", home);
  
  
  /* '/', function(req, res, next) {
  res.render('home'); */


module.exports = router;
