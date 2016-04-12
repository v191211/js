/**
 * 闭包
 * 		1、概念
 * 			在函数内部定义的函数，在外部要使用
 *		2、应用
 			1、继承的封装机制
 			2、面向对象的封装
 */

/**********************************************************/
	/**
	 * 下面的方式, 存在严重的安全性隐患
	 */
function Person(){
	
}
Person.prototype.setId = function(id){
	this.id = id;
}
Person.prototype.setName = function(name){
	this.name = name;
}
Person.prototype.getId = function(){
	return this.id;
}
Person.prototype.getName = function(){
	return this.name;
}

var p = new Person();
p.setId(5);
alert(p.getId());
/******************************************************************/



/**
 * 匿名函数   闭包范式
 */
(function(){
	/**
	 * 在匿名函数内部写一些函数，a,b,c,d,e,f
	 *     a,b,c函数公开
	 *     d,e,f函数私有化
	 */
	function Student(){
		/**
		 * json对象中的方法公开方法
		 */
		return {
			a:a,
			b:b,
			c:c
		};
	}
	function a(){
		alert("a");
	}
	function b(){
		alert("b");
	}
	function c(){
		alert("c");
	}
	/**
	 * 私有方法
	 */
	function d(){
		
	}
	function e(){
		
	}
	function f(){
		
	}
	window.Student = Student;
})();
var json = window.Student();
json.a();
json.b();
json.c();



/**
 * 改进结构
 */
(function(){
	/**
	 * 按照json格式(模块)的结构组织，这样结构会更清晰
	 */
	var publicMethod = {//公开的API的访问
		a:function(){
			aa.ab();//私有方法的调用
		},
		b:function(){
			
		},
		c:function(){
			
		}
	};
	/**
	 * aa模块
	 */
	var aa = {
		ab:function(){
			
		},
		bb:function(){
			
		}
	};
	window.publicMethod = publicMethod;
})();

