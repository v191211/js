package app.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class XmlFileServlet extends HttpServlet {

	private static final long serialVersionUID = -1531657747548181582L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		//如果服务器端向客户端响应xml格式的数据，需要设置响应首部信息："Content-Type"为"text/xml"
		response.setContentType("text/xml;charset=utf-8");
		PrintWriter out = response.getWriter();
		
		//查询数据库，结果集都封装在javabean、List、Array和Map集合中
		
		//如何将javabean、List、Array和Map集合转换成xml数据格式？
		
		//手工构建一个xml格式的数据内容
		out.println("<china>");
		out.println("<province name='吉林省'>");
		out.println("<city>长春</city>");
		out.println("<city>吉林市</city>");
		out.println("<city>四平</city>");
		out.println("<city>松原</city>");
		out.println("<city>通化</city>");
		out.println("</province>");
		
		out.println("<province name='辽宁省'>");
		out.println("<city>沈阳</city>");
		out.println("<city>大连</city>");
		out.println("<city>鞍山</city>");
		out.println("<city>抚顺</city>");
		out.println("<city>铁岭</city>");
		out.println("</province>");
		
		out.println("<province name='山东省'>");
		out.println("<city>济南</city>");
		out.println("<city>青岛</city>");
		out.println("<city>威海</city>");
		out.println("<city>烟台</city>");
		out.println("<city>潍坊</city>");
		out.println("</province>");
		out.println("</china>");
	}

}
