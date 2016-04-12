package app.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class RegisterServlet extends HttpServlet {

	private static final long serialVersionUID = -8838815554787986799L;

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		
		String username = request.getParameter("username");
		
		//真实项目，查询数据库：结果集是否为空
		if(username==null||"".equals(username)){
			out.println("请输入你的用户名!");
		}else if(username.equals("sa")){
			out.println("该用户名已经使用!");
		}else{
			out.println("该用户名可以使用!");
		}
		
	}

}
