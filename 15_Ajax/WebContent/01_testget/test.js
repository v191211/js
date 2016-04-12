//当页面加载完毕之后，执行以下代码
window.onload = function(){
	document.getElementById("ok").onclick = function(){
		//1 创建XMLHttpRequest对象
		var xhr = ajaxFunction();
		
		/*
		 * 2 客户端与服务器端建立连接
		 * 
		 * XMLHttpRequest对象的open()方法
		 * 	* method：请求类型，类似 “GET”或”POST”的字符串。
		 * 	* url：请求路径，可以是绝对路径或相对路径。
		 * 	* asynch：表示请求是否要异步传输，默认值为true(异步)。
		 */
		xhr.open("GET","../testServlet?timeStamp="+new Date().getTime()+"&c=9",true);
		
		/*
		 * 3 客户端向服务器端发送请求
		 * 
		 * XMLHttpRequest对象的send()方法
		 * 	* 如果请求类型是GET方式的话，客户端通过send()方法向服务器端发送请求数据，服务器端接收不到
		 * 		* 即使send()方法不能发送请求数据，但是该步骤不能省略。xhr.send(null);
		 */
		xhr.send(null);		//xhr.send("a=7&b=8");
		
		/*
		 * 4 服务器端向客户端进行响应
		 * 
		 * XMLHttpRequest对象的onreadystatechange属性：监听服务器端的通信状态
		 * 
		 * readyState 属性表示Ajax请求的当前状态。它的值用数字代表。
			0 代表未初始化。 还没有调用 open 方法
			1 代表正在加载。 open 方法已被调用，但 send 方法还没有被调用
			2 代表已加载完毕。send 已被调用。请求已经开始
			3 代表交互中。服务器正在发送响应
			4 代表完成。响应发送完毕
		 * 
		 * 常用状态码及其含义：
			404 没找到页面(not found)
			403 禁止访问(forbidden)
			500 内部服务器出错(internal service error)
			200 一切正常(ok)
			304 没有被修改(not modified)(服务器返回304状态，表示源文件没有被修改 )
		 */
		xhr.onreadystatechange = function(){
//			alert(xhr.readyState);
//			alert(xhr.status);
			if(xhr.readyState==4){
				if(xhr.status==200||xhr.status==304){
					var data = xhr.responseText;
					
					alert(data);
				}
			}
		}
		
	}
	
	function ajaxFunction(){
	   var xmlHttp;
	   try{ // Firefox, Opera 8.0+, Safari
	        xmlHttp=new XMLHttpRequest();
	    }
	    catch (e){
		   try{// Internet Explorer
		         xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		      }
		    catch (e){
		      try{
		         xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		      }
		      catch (e){}
		      }
	    }
	
		return xmlHttp;
	 }
}
