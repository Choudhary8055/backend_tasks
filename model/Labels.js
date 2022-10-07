// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const { compareAsc, format } = require('date-fns');

const ProductSchema = mongoose.Schema({
	lable: {
		type: String,
		require: true,
		maxLength: 20
	},
	amount: {
		type: String
	},
	createdAt: {
		type: String,
		default: format(Date.now(), 'yyyy-MM-dd')
	},
	history: [
		{
			type: Object
		}
	],
	isDeleted: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Lables', ProductSchema);
