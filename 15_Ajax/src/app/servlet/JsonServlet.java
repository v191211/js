package app.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class JsonServlet extends HttpServlet {

	private static final long serialVersionUID = -4377861146091556815L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		
		//手工构建一个String类型的json数据格式
		String json = "[{'province':'吉林省'},{'province':'辽宁省'},{'province':'山东省'}]";
		
		out.println(json);
		
	}

}
