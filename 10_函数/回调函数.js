/**
 * 回调函数
 */

// 获取发送ajax请求必须的XMLHttpRequest对象
function ajaxFunction(){
    var xmlHttp;
    try { // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    } 
    catch (e) {
        try {// Internet Explorer
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } 
        catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } 
            catch (e) {
            }
        }
    }  
    return xmlHttp;
}

// 封装ajax请求响应方法
function post(ajaxJSON){
    var xmlHttp = ajaxFunction();
	var a = 0;
	/**
	 * onreadystatechange该函数由服务器端触发
	 *    1、onreadystatechange函数和js端的其他函数完成是异步过程
	 *    2、在js端运行的一段代码中用到服务器端返回的数据，那么这段js代码必须放在xmlHttp.status==200中执行
	 */
    xmlHttp.onreadystatechange = function(){
       if (xmlHttp.readyState == 4) {//服务器响应完毕
	   		if (xmlHttp.status == 200) {//服务器的数据成功的回调到客户端
				ajaxJSON.callback(xmlHttp.responseText);
				/**
				 * a赋值为5是在服务器成功返回的时候
				 */
				a = 5;
	   		}
	   }
    }
    xmlHttp.open(ajaxJSON.method, ajaxJSON.url, true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.send(ajaxJSON.data);
	alert(a); // 有可能是0或5,取决于js执行到这句话时,服务器时候已经返回数据
	
}

// 页面一加载,调用自定义的post方法 (callback就是回调函数)
$().ready(function(){
	post({
		method:'post',
		url:'../HelloServlet',
		data:null,
		callback:function(data){
			alert(data);
		}
	});
});

//ajax的post方法接收的参数中也有回调函数
//$.post(url,parameter,function(data){
//
//});
