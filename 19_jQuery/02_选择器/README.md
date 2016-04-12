## 需要注意的地方 ##

    //<input type="button" value="选择 所有的span元素和id为two的元素." id="btn5"/>
      $("#btn5").click(function(){
    	//多个选择器并列使用时，用","隔开
    	$("span,#two").css("background","blue");
      });
    
    
    //<input type="button" value="组合属性选择器,首先选取有属性id的div元素，然后在结果中 选取属性title值 含有“es”的元素." id="btn7"/>
      $("#btn7").click(function(){
    	$("div[id][title*=es]").css("background","yellow");
      });
    
    
    //<input type="button" value="选取每个class为one的div父元素下的第2个子元素." id="btn1"/>
      $("#btn1").click(function(){
    	/*
    	 * 子元素过滤选择器的用法，需要在其前面增加空格
    	 * 子元素过滤选择器的索引值是从"1"开始
    	 */
    	$("div[class=one] :nth-child(2)").css("background","yellow");
      });