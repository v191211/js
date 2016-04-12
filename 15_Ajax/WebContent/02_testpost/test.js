window.onload = function(){
	document.getElementById("ok").onclick = function(){
		var xhr = ajaxFunction();
		
		xhr.onreadystatechange = function(){
			alert(xhr.readyState);
			if(xhr.readyState==4){
				if(xhr.status==200){
					var data = xhr.responseText;
					
					alert(data);
				}
			}
		}
		
		xhr.open("POST","../testServlet?timeStamp="+new Date().getTime(),true);
		
		//如果请求类型是POST方法的话，需要设置请求首部信息 (form表单默认设置该首部信息)
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		
		xhr.send("a=7&b=8");
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
