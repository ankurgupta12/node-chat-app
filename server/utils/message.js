var generateMessage= (from,text ) =>{
return {
	from,
	text,
	createdAt:new Date().getTime()
};
};
exports.generateMessage = generateMessage;