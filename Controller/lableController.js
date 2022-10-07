const lableDeo = require('../dao/Lable');
const Lable = require('../model/Labels');

//addData user to backend database
exports.addLable = async (req, res) => {
	try {
		const { lable, amount } = req.body;

		if (!lable || !amount) {
			throw new Error(`please fill valid data `);
		} else {
			let result = await lableDeo.createLable(lable, amount);
			console.log(result);
			res.status(201).json(result);
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//get all data from backend
exports.getData = async (req, res) => {
	try {
		let { page, limit } = req.query;
		const data = await lableDeo.getFetchData(page, limit);
		// res.send(data);
		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
};

//delete data
exports.deleteLable = async (req, res) => {
	try {
		const deleteData = await lableDeo.findTaskAndDelete(req.params.id);
		console.log(deleteData);
		res.status(200).json(deleteData);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//update data
exports.updateWithId = async (req, res) => {
	try {
		const { id } = req.params;

		const { oldData, updatedData } = await lableDeo.updateById(req.body, id);

		res.status(200).json({ success: true, oldData, updatedData });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
};

//search by lable
exports.searchByLable = async (req, res) => {
	try {
		const searchData = await lableDeo.searchByLable(req.params.lable);
		res.status(200).json({ success: true, searchData });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
};

//search by date
exports.searchByDate = async (req, res) => {
	try {
		const { date } = req.params;
		console.log(date);
		const searchData = await Lable.find({ createdAt: date });

		res.status(200).json({ success: true, searchData });
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
};

// fetch all require data user input fields
exports.getDataById = async (req, res) => {
	try {
		const data = await lableDeo.getDataById(req.params.id);
		res.status(200).json({
			success: true,
			data
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
};

exports.deleteAll = async (req, res) => {
	const deleted = await Lable.deleteMany();
	res.status(200).json({
		meaasge: 'all deleted'
	});
};
