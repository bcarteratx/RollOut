const express = require('express');
const router = express.Router();
const inventoryCtrl = require('../../controllers/inventory');

/*------------------------------ Public Routes ------------------------------*/


/*----------------------------- Protected Routes ----------------------------*/

// Process the token for only the routes below
router.use(require('../../config/auth'));
router.get('/', checkAuth, inventoryCtrl.index);
router.post('/', checkAuth, inventoryCtrl.create);
router.put('/:idx', checkAuth, inventoryCtrl.update);
router.delete('/:idx', checkAuth, inventoryCtrl.delete);

/*----------------------------- Helper Functions ----------------------------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
