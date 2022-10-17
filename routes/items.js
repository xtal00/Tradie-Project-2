var express = require('express');
var router = express.Router();
var itemsCtrl = require('../controllers/items');
const multer = require("multer");
//const upload = multer({ dest: '../uploads/'});
const uploadCtrl= require('../controllers/upload')


router.get('/', itemsCtrl.index);
router.get('/new', itemsCtrl.new);
router.get('/:id', itemsCtrl.show);
router.post('/', itemsCtrl.create);
router.get('/:id/edit', itemsCtrl.edit);

router.delete('/:id', itemsCtrl.delete);


//router.post('/upload', upload.single('image'), uploadCtrl.upload)

module.exports = router;
