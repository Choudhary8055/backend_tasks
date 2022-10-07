const express = require('express');
const router = express.Router();
const dataFromController = require('../Controller/lableController');

router.post('/addlable', dataFromController.addLable);
router.get('/getdata', dataFromController.getData);
router.delete('/deleteall', dataFromController.deleteAll);

router.put('/update/:id', dataFromController.updateWithId);
router.delete('/delete/:id', dataFromController.deleteLable);
router.get('/getDataById/:id', dataFromController.getDataById);

router.get('/serach/:lable', dataFromController.searchByLable);
//router.get('/serachDa/:date', dataFromController.getDataById);
router.get('/serachbydate/:date', dataFromController.searchByDate);

// lableRouter.get('/getolddata', getOldData);
module.exports = router;
