const moduleLable = require('../model/Labels');
// const router = require('../router/LableRouter');

exports.createLable = async (lable, amount) => {
  return await moduleLable.create({
		lable: lable,
		amount: amount
	});
};




exports.getLableById = async (id)=>{
	return await moduleLable.findById(id).lean();
};
exports.searchByLable = async (lable)=>{
	return await moduleLable.find({lable}).lean();
};

exports.updateById = async (data, id) => {
	const oldData = await moduleLable.findById(id);

	const updatedData = await moduleLable.findByIdAndUpdate(id, data, {
		new: true
	});
	oldData.history = undefined;
	updatedData.history.push(oldData);
	await updatedData.save();
	return { oldData, updatedData };
};


exports.getFetchData = async (page, limit,lable)=>{
	const skip= (page)*limit;
  return await moduleLable.find().sort({lable:1}).limit(limit).skip(skip);

}



// exports.getAll = async (pageSize, pageNo)=>{
// 	return await moduleLable.find().limit(pageSize).skip((pageNo-1)* pageSize);
// };

exports.findTaskAndDelete = async (id) => {
	return await moduleLable.findByIdAndUpdate(id, { isDeleted: true });
};

exports.getDataById = async(id)=>{
	return await moduleLable.findOne({id}).lean();
};




	