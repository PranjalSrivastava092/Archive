var express = require('express');
var router = express.Router();
var model = require('../controllers/controller');

router.post('/create', model.create);
router.post('/update', model.update);
router.get('/get/:id', model.retrieve)
router.get('/getAll', model.retrieveAll);
router.delete('/delete/:id', model.delete);

module.exports = router;