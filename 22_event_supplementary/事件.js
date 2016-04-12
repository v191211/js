/**
 * 1、事件的声明
 * 2、自定义事件
 */
$().ready(function(){
//    for (var i = 0; i < 5000; i++) {
//		/**
//		 * 循环了5次，该事件叠加了5次
//		 */
////        $("input[type='button']").click(function(){
////            alert("aaa");
////        });
//    	
//    	// 解决方案,无论循环多少次,只绑定一次事件:
//		$("input[type='button']").unbind("click");
//		$("input[type='button']").bind("click",function(){
//			alert("aaaaa");
//		});
//    }
	
	
	/**
	 * 自定义事件
	 * 		1、对事件进行声明
	 * 			$("input[type='button']").unbind("纯爷们");
	 * 			$("input[type='button']").bind("纯爷们",function(){
					alert("aaaaa");
				});
			2、触发机制
	 */
	// 声明事件
    // event参数: 事件对象是由底层创建并传值的. 后面的才是自定义并手动传值的参数
	$("input[type='button']").unbind("diyEventName");
	$("input[type='button']").bind("diyEventName",function(event,a,b,c){
			alert(a);
			alert(b.aa);
			alert("chunyemen");
	});

	// 绑定 click事件,调用声明过的事件
	$("input[type='button']").unbind("click");
	$("input[type='button']").bind("click",function(){
		/**
		 * trigger(): 触发某一个事件 (结合下面的自定义事件)
		 * 参数:5对应a, {aa:6}对应b, 7对应c
		 */
		$(this).trigger("diyEventName",[5,{aa:6},7]);
		alert("aaaaa");
	});
});
