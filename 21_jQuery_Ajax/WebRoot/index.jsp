<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>实现跨域请求</title>
    <script type="text/javascript" src="js/jquery-1.10.2.js"></script>
  </head>
  
  <body>
    <input type="button" id="send" value="跨域请求">
  </body>
  <script type="text/javascript">
  		$().ready(function(){
  			
  			var sendData = {
  					aaa:"aaa",
  					bbb:"bbb"
  			}
  			// 主要是callback参数,这相当于使用了jsonp的格式进行请求,也就是发送数据相当于发送js函数给服务器.
  			// 而服务器端拿到底层生成的函数名后,响应数据时格式为: 函数名(响应数据)
  			$("#send").click(function(){
  				$.getJSON("http://www.youtube.com:8080/testServlet?callback=?",sendData,function(data){
  					alert(data);
  				});
  			});
  		});
  		
  </script>
</html>
