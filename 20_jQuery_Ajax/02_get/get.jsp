<%@ page language="java" pageEncoding="UTF-8"%>
<%

	System.out.println(request.getMethod());

	System.out.println("connection server success");
	
	System.out.println("username = "+request.getParameter("username"));
	System.out.println("password = "+request.getParameter("psw"));
	
	//响应HTML格式
	//out.println("helloworld");
	
	//响应XML格式
	//response.setContentType("text/xml;charset=utf-8");
	//out.println("<china><province name='吉林省'></province><province name='辽宁省'></province><province name='山东省'></province></china>");
	
	//响应JSON格式：不能手动去构建数据, 只能使用json-lib生成json格式的数据进行返回, 否则会当做字符串进行处理,而不是json
	response.setContentType("text/html;charset=utf-8");
	out.println("[{'province':'吉林省'},{'province':'辽宁省'},{'province':'山东省'}]");
%>