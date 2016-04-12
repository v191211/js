package app.test;

import java.util.ArrayList;
import java.util.List;

import app.bean.City;
import app.bean.Province;
import app.json.JSONUtil;

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
		String json = JSONUtil.object2json(province);
		
		System.out.println(json);
	}
	
}
