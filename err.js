var afun_fail = function(name, age , cb){
	var e={'code':1, 'msg':'sth is wrong'};
	var result = {'name':name , 'age':age};
	cb(e);
};
var afun_success = function(name, age , cb){
	var e = null;
	var result = {'name':name , 'age':age};
	cb(e, result);
};
var bfun = function(cb){
	afun_fail('no7dw', 29, function(err, result){
		cb(err, result);
	});
	afun_success('no7dw', 29, function(err, result){
		cb(err, result);
	});
};
bfun(function(err, result){
	console.log(err, result);
});
