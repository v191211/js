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
		
		System.out.println("connection youtube success!");
		
		String callback = request.getParameter("callback");
		String aaa = request.getParameter("aaa");
		String bbb = request.getParameter("bbb");
		
		System.out.println(aaa);
		System.out.println(bbb);
		
		//jQuery110207728844861803689_1376708238782
		System.out.println("callback = "+callback);
		
		String json = "{msg:'youtube videos'}";
		
		//函数名(响应数据)
		out.println(callback+"("+json+")");
		
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
