xstream jar包: 可以使java中的javabean, list, map 等对象转换为xml格式文件

main方法执行结果:

<province id="1" name="吉林省">
  <citys>
    <city>
      <id>1</id>
      <name>长春市</name>
    </city>
    <city>
      <id>2</id>
      <name>吉林市</name>
    </city>
    <city>
      <id>3</id>
      <name>松原市</name>
    </city>
    <city>
      <id>4</id>
      <name>四平市</name>
    </city>
    <city>
      <id>5</id>
      <name>通化市</name>
    </city>
  </citys>
</province>

取消注释:
xStream.useAttributeFor(City.class, "id");
xStream.useAttributeFor(City.class, "name");
结果:

<province id="1" name="吉林省">
  <citys>
    <city id="1" name="长春市"/>
    <city id="2" name="吉林市"/>
    <city id="3" name="松原市"/>
    <city id="4" name="四平市"/>
    <city id="5" name="通化市"/>
  </citys>
</province>
