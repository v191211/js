package app.test;

import java.util.ArrayList;
import java.util.List;

import com.thoughtworks.xstream.XStream;

import app.bean.City;
import app.bean.Province;

public class test {

	public static void main(String[] args) {
		/***********************模拟查询数据库结果集**************************/
//		Province p1 = new Province(1, "吉林省");
//		Province p2 = new Province(2, "辽宁省");
//		Province p3 = new Province(3, "山东省");
//		
//		List<Province> provinces = new ArrayList<>();
//		provinces.add(p1);
//		provinces.add(p2);
//		provinces.add(p3);
		
		City city1 = new City(1, "长春市");
		City city2 = new City(2, "吉林市");
		City city3 = new City(3, "松原市");
		City city4 = new City(4, "四平市");
		City city5 = new City(5, "通化市");
		
		List<City> citys = new ArrayList<>();
		citys.add(city1);
		citys.add(city2);
		citys.add(city3);
		citys.add(city4);
		citys.add(city5);
		
		Province province = new Province(1, "吉林省", citys);
		
		/***********************模拟查询数据库结果集**************************/
		//1 创建XStream类型的实例化对象
		XStream xStream = new XStream();
		
		//2 起别名
		xStream.alias("province", Province.class);
		xStream.alias("city", City.class);
		
		//3 将javabean的属性作为xml格式的标签属性存在
		xStream.useAttributeFor(Province.class, "id");
		xStream.useAttributeFor(Province.class, "name");
//		xStream.useAttributeFor(City.class, "id");
//		xStream.useAttributeFor(City.class, "name");
		
		//4 利用toXML()方法将javabean、List、Array和Map集合转换成xml格式
		String xml = xStream.toXML(province);
		
		System.out.println(xml);
	}
	
}
