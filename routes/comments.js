var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/comments');

router.post('/:id/comments', reviewsCtrl.create);
router.delete('/:id', reviewsCtrl.delete);

module.exports = router;