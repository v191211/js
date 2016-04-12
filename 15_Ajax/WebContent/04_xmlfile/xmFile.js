window.onload = function(){
	var xhr = ajaxFunction();
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				var docXml = xhr.responseXML;
				
				var provinceXmlElements = docXml.getElementsByTagName("province");
				
				for(var i=0;i<provinceXmlElements.length;i++){
					var provinceXmlElement = provinceXmlElements[i];
					
					var provinceXmlValue = provinceXmlElement.getAttribute("name");
					
					var option = document.createElement("option");
					option.setAttribute("value",provinceXmlValue);
					var text = document.createTextNode(provinceXmlValue);
					option.appendChild(text);
					
					var provinceElement = document.getElementById("province");
					
					provinceElement.appendChild(option);
					
				}
				
				document.getElementById("province").onchange = function(){
					var cityElement = document.getElementById("city");
					var options = cityElement.getElementsByTagName("option");
					for(var z=1;z<options.length;z++){
						cityElement.removeChild(options[1]);
						z--;
					}
					
					var provinceValue = this.value;
					
					for(var i=0;i<provinceXmlElements.length;i++){
						var provinceXmlElement = provinceXmlElements[i];
					
						var provinceXmlValue = provinceXmlElement.getAttribute("name");
						
						if(provinceValue==provinceXmlValue){
							var cityXmlElements = provinceXmlElement.getElementsByTagName("city");
							
							for(var j=0;j<cityXmlElements.length;j++){
								var cityXmlElement = cityXmlElements[j];
								
								var cityXmlValue = cityXmlElement.firstChild.nodeValue;
								
								var option = document.createElement("option");
								option.setAttribute("value",cityXmlValue);
								var text = document.createTextNode(cityXmlValue);
								option.appendChild(text);
								
								cityElement.appendChild(option);
								
							}
							
						}
					}
					
				}
			}
		}
	}
	
	xhr.open("get","../xmlFileServlet?timeStamp="+new Date().getTime(),true);
	
	xhr.send(null);
	
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
