/*
 * 
 */

function createClass(jsonObj){
	
	function ResultObj(){
		
	}
	for(var i in jsonObj){
		/**
		 *  遍历jsonObj对象的每一个key,value属性，赋值到resultObj的原型上
		 *  key: i , value: jsonObj[i]
		 */
		//alert("i"+i);
		ResultObj.prototype[i] = jsonObj[i];
	}
	return ResultObj;
}

var CopiedObj = createClass({
	aaa:function(){
		alert("aaa");
	},
	bbb:function(){
		alert("bbb");
	}
});

var obj = new CpiedObj();

copiedObj.aaa;
copiedObj["bbb"];