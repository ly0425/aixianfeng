define(['text!./home.html','css!./home.css'],function(html){
    function render(){
      $('.container').html(html);
    }
//轮播图
function loopImg(){
	$("#loop").unslider({
		speed:1000,//动画过渡的速度（毫秒），如果不需要过渡效果就设置为false
		delay:1500,//每张幻灯片的间隔时间（毫秒），如果不是自动播放就设置为false
		keys:true,//是否开启键盘导航
		dots:true,//是否开启导航点
		// arrows:true//是否显示向前和向后的指示箭头
	})
}


    //foot换图片
    function footImg(){
		$(".footA2").click(function(){
			$(this).children(".foImg").children("img").attr("src","images/foot11.jpg");
		})
		function resetImg(){
			$(".footA1").children(".foImg").children("img").attr("src","images/foot1.jpg")
			$(".footA2").children(".foImg").children("img").attr("src","images/foot2.jpg")
			$(".footA3").children(".foImg").children("img").attr("src","images/foot3.jpg")
			$(".footA4").children(".foImg").children("img").attr("src","images/foot4.jpg")
			$(".footA5").children(".foImg").children("img").attr("src","images/foot5.jpg")
		}
		resetImg();
    }
//购物车
	function addCar(){
		$(".addNum").click(function(){
			var count=0;
			$(".foNum").html(count+=1);
		})
	}
//请求ajax
	function getData(){
		//请求菜单
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
			async:true,
			success:function(req){
				var obj=JSON.parse(req)
				var strH="";
				strH+="<div>";
				$.each(obj.data.menu,function(i,elem){	
					strH+="<a href='#'><b>";
					strH+="<img src='"+elem.activity.img+"'></b>";
					strH+="<span>"+elem.activity.name+"</span></a>";	
				})
				strH+="</div>";
//				$("#dr").html(strH);
				
			}
		});
		//请求轮播图
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
			async:true,
			success:function(req){
				var obj=JSON.parse(req)
				var strH="";
				$.each(obj.data.slide,function(i,elem){	
					strH+="<img src='"+elem.activity.img+"'>";	
				})
				$(".loopImg").html(strH);
				
			}
		});
		//首页先锋热卖
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php",
			async:true,
			success:function(req){
				var obj=JSON.parse(req)
				var strH="";
				$.each(obj.data,function(i,elem){	
					strH+="<div id='ul'><ul>"
						+"<li><img src="+elem.img+"></li>"
						+"<li>"+elem.name+"</li>"
						+"<li><b>精选</b><span>"+elem.pm_desc+"</span></li>"
						+"<li>"+elem.specifics+"</li>"
						+"<li>￥"+elem.price+"<span>￥"+elem.market_price+"</span></li>"
						+"<li><img src='images/add.jpg'></li></ul></div>"
					$("#frul").html(strH);
				
				})	
			}
		});

		
		
		
		
	}


    return {
      render:render,
      loopImg:loopImg,
      footImg:footImg,
      addCar:addCar,
      getData:getData
    }
})


