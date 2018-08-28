var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res) {
  res.render('contact.ejs', {
    pageTitle: 'Contact',
  });
});
module.exports = router;
