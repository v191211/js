<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	System.out.println(request.getMethod());

	System.out.println("connection server success");

	System.out.println("username = "+request.getParameter("username"));
	System.out.println("password = "+request.getParameter("psw"));
	
	//响应HTML格式
	//out.println("helloworld");
	
	//响应XML格式
	response.setContentType("text/xml;charset=utf-8");
	out.println("<china><province name='吉林省'></province><province name='辽宁省'></province><province name='山东省'></province></china>");

%>