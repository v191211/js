//测试extend()方法
jQuery.extend({
	minValue : function(a,b){
		return a < b ? a : b;
	},
	maxValue : function(a,b){
		return a < b ? b : a;
	}
});
