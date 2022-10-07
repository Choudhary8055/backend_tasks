const csv = require('csvtojson');
const { storeToDb } = require('../dao/fileDeo');

exports.uploadCsv = async (req, res) => {
	try {
		let csvFile = Object.keys(req.files).map(key => req.files[key]);

		const jsonData = await csv().fromFile(csvFile[0].tempFilePath);

		const data = await storeToDb(jsonData);

		res.status(200).json({ success: true, data });
	} catch (err) {
		console.log(err);
		return res.status(400).json({ message: err });
	}
};
