package app.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class TestServlet extends HttpServlet {
	private static final long serialVersionUID = 8047343095005414726L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		//如果打印这句话，说明建立连接成功
		System.out.println("connection server success!");
		
		//如果打印这句话，说明接收参数成功
		System.out.println("a = "+request.getParameter("a"));
		System.out.println("b = "+request.getParameter("b"));
		System.out.println("c = "+request.getParameter("c"));
		
		//向客户端进行响应
		out.println("get connection server successful!");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		//如果打印这句话，说明建立连接成功
		System.out.println("connection server success!");
				
		//如果打印这句话，说明接收参数成功
		System.out.println("a = "+request.getParameter("a"));
		System.out.println("b = "+request.getParameter("b"));
				
		//向客户端进行响应
		out.println("post connection server successful!");
		
	}

}
