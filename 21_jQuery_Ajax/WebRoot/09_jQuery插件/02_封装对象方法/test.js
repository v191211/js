jQuery.fn.extend({
	test : function(){
		//this代表jQuery对象. 例如本例中被转换成jQuery对象的input元素对象
		$.each(this,function(){
			alert(this.value);
		});
	}
});
