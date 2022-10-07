const router = require('express').Router();
const multer = require('multer');
const { uploadCsv } = require('../Controller/fileController');

const upload = multer({ dest: 'uploads/csv/' });

router.post('/upload/csv', uploadCsv);

module.exports = router;
