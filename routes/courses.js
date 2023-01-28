var express = require('express');
var router = express.Router();

const {list,detail}= require("../controllers/coursesController")

/* /courses */
router    
  .get("/list", list)  
      /* http://localhost:3000/courses/list */
  .get("/detail/:id", detail);
/* http://localhost:3000/courses/detail/1 */




/* ', function(req, res, next) {
  res.send('respond with a resource');
}); */

module.exports = router;
