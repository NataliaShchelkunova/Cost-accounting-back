const express = require('express');
const router = express.Router();

const {
    getAllCost,
    createNewCost,
    changeCostInfo,
    deleteCost,
} = require('../controllers/cost.controller');

//Tasks routes
router.get('/allCost', getAllCost);
router.post('/createCost', createNewCost);
router.patch('/updateCost', changeCostInfo);
router.delete('/deleteCost', deleteCost);

//User routes
module.exports = router;


