const express = require('express');
const router = express.Router();

const first_controller = require('../controllers/first.controller');
const add_controller = require('../controllers/add.controller');
router.get('/list',first_controller.test);
router.post('/add', add_controller.add);
router.get('/:id', add_controller.product_details);
router.put('/:id/update', add_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;