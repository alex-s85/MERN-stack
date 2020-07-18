const { Router } = require('express');
const accountsController = require('../controllers/accounts.controller');

const router = Router();

router.get('/checking', accountsController.checking);

module.exports = router;