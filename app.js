const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./connections/config');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: '/tmp/'
	})
);

app.use('/', require('./router/LableRouter'));
app.use('/', require('./router/fileRouter'));

const port = 3500;
app.listen(port, err => {
	if (err) console.log(err);
	console.log(`server is started at port ${port}`);
});
