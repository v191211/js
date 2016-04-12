function parseXML(fileXmlName){
	var xmlDoc;			
	try {//Internet Explorer  创建一个空的xml文档
	     xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	} 
	catch (e) {
	     try {//Firefox, Mozilla, Opera, 创建一个空的xml文档
		xmlDoc = document.implementation.createDocument("", "", null);
	     } 
	     catch (e) {
	     }
	}
	//关闭异步加载
	xmlDoc.async = false;
	//加载xml文件
	xmlDoc.load(fileXmlName);
	return xmlDoc;
}
