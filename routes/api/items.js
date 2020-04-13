const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/items');

/*------------------------------ Public Routes ------------------------------*/

router.get('/', checkAuth, itemsCtrl.index);

/*----------------------------- Protected Routes ----------------------------*/

// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, itemsCtrl.create);
router.get('/:id', checkAuth, itemsCtrl.show);
router.put('/:id', checkAuth, itemsCtrl.update);
router.delete('/:id', checkAuth, itemsCtrl.delete);

/*----------------------------- Helper Functions ----------------------------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
