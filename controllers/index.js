const getIndex = (req,res)=>{
	res.render('index');
}

const postIndex = (req,res)=> {
	console.log(req.body.title);
	res.redirect('/');
}

module.exports = {
	getIndex:getIndex,
	postIndex:postIndex
}