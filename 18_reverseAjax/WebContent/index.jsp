<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>动态显示时钟</title>
	
  </head>
  
  <body>
    <input type="button" id="start" value="开始显示">
    <input type="button" id="stop" value="停止显示">
    <div id="showtime"></div>
  </body>
  <script type="text/javascript">
  		window.onload = function(){
  			var t;
  			
  			document.getElementById("start").onclick = showtime;
  			
  			document.getElementById("stop").onclick = function(){
  				clearTimeout(t);
  			}
  				
  			function showtime(){
  				var xhr = ajaxFunction();
  					
  				xhr.onreadystatechange = function(){
  					if(xhr.readyState==4){
  						if(xhr.status==200){
  							var data = xhr.responseText;
  							
  							document.getElementById("showtime").innerHTML = "<h1>"+data+"</h1>";
  						}
  					}
  				}
  				
  				xhr.open("get","showTime?timeStamp="+new Date().getTime(),true);
  				
  				xhr.send(null);
  				
  				t = setTimeout(showtime,1000);
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
  </script>
</html>
