## 模拟跨域请求 (完全跨域)

> 完全跨域: 主机ip 不相同<br/>
> 跨子域: 主机ip相同, port 不同

1.

修改:

    %windows% -->System32 --drivers --etc --hosts

增加:<br/>

    127.0.0.1 www.google.com
    127.0.0.1 www.youtube.com

2.

修改:<br/>

    %tomcat% -->conf --> server.xml

增加:

    <Host appBase="google" name="www.google.com"></Host>
    <Host appBase="youtube" name="www.youtube.com"></Host>

3.

%tomcat% **根目录**:<br/>
创建两个文件夹: google youtube<br/>
两个文件夹中分别建立 **ROOT** 文件夹 (tomcat默认访问文件夹)

4.

使用eclipse发布工程到tomcat<br/>
将发布到tomcat中的js文件夹及index.jsp copy到 %tomcat%/google/ROOT/ 文件夹下<br/>
将发布到tomcat中的WEB-INFO copy 到 %tomcat%/youtube/ROOT/ 文件夹下

模拟google为客户端, youtube为服务器端

5.
启动tomcat,验证配置是否成功<br/>
访问http://www.google.com:8080/index.jsp<br/>
访问http://www.youtube.com:8080/testServlet<br/>

> **NOTE:** eclipse 启动 tomcat 时 server.xml 可能会被改变,这时需要停止服务重新修改一下 server.xml 文件, 再次启动就可以了<br/>
> google youtube 文件夹中是发布到tomcat中生成的class文件,看效果的时候直接放到 %tomcat% 根目录中就可以了