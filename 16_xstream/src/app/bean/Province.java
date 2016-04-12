package app.bean;

import java.util.ArrayList;
import java.util.List;

public class Province {

	private Integer id;
	private String name;
	private List<City> citys;
	public Province(Integer id,String name,List citys) {
		this.id = id;
		this.name = name;
		this.citys = citys;
	}
	public List<City> getCitys() {
		return citys;
	}
	public void setCitys(List<City> citys) {
		this.citys = citys;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
