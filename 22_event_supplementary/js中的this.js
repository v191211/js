// 在java中,this代表具体的对象,例如:

    class Person{
    	private String name;
    	public Person(){
    		this.name = "zhangsan";
    	}
    }
    
    class Student extends Person(){
    	public Student(){
    		super();
    	}
    
    	public static void main(String[] args){
    		Person p = new Person();	// Person中的 this 代表 Person
    		Student s = new Student();	// Person中的 this 代表 Sudent
    	}
    }

// 而在js中,this可能代表任何东西,例如:

    <script type="text/javascript">
    	function Person(){
    		alert(this);
    		this.name = "zhangsan";
    	}
    
    	Person();	//Person中的 this代表 window对象
    
    	function Student(){}
    
    	Student.attrib = Person;
    
    	Sudent.attrib();	//Person中的 this 代表 Student
    
    	var obj = {
    		this.attrib = Person;
    	}
    
    	obj.attrib();	//Person中的 this 代表 obj 对象
    
    	// 如果Person中接收一个参数,还可以使用call传递参数
    	// 例如: 定义Person(age) --> Person.call(window,5);
    	Person.call(window); //相当于 window.Person();
    	Person.call(Student); //相当于 Student.Person();
    	// apply() 方法和 call() 方法的功能相同
    	// 都是提供了方法的动态调用的功能
    
    	// 思考问题: 为什么jQuery通过选择器创建出来的对象能调用jQuery的所有方法?
    
    </script>

