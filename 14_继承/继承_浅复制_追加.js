function createClass(fun,prop){
	function F(){
		
	}
	/**
	 * 当第一次调用fun时，fun是一个json格式的对象
	 */
	if(typeof fun=="object"){//fun传递进来的参数是json格式的对象
		for(var i in fun){
			F.prototype[i] = fun[i];
		}
	}
	
	/**
	 * 当第二次调用createClass的时候,fun是一个函数
	 */
	if(typeof fun == "function"){
		/**
		 * 把fun的原型赋值给了F的原型
		 */
		F.prototype = fun.prototype;
		for(var i in prop){//prop是一个json格式的对象
			F.prototype[i] = prop[i];
		}
	}
	
	return F;
}

var Person = createClass({
	name:'aaa',
	id:5
});
var p = new Person();
alert(p.name);

var SupPerson = createClass(Person,{
	sex:'aaaa',
	high:180
});
var pp = new SupPerson();
alert(pp.name);
alert(pp.sex);

