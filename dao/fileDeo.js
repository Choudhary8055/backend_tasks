const moduleLable = require('../model/Labels');

exports.storeToDb = async data => {
	return (storedData = await moduleLable.create(data));
};
