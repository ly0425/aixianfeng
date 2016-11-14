define(['text!./market.html','css!./market.css'],function(html){
    function render(){
      $('.container').html(html);
    }
//foot换图片
    function footImg(){
		$(".footA2").click(function(){
			$(this).children(".foImg").children("img").attr("src","images/foot21.jpg");
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
	function shopCar(){
		$(".num").html(0);
		//加号
		$(".ad").click(function(){
			$(this).siblings(".cu").css("visibility","visible");
			$(this).siblings(".num").css("visibility","visible");
			$(".foNum").css("visibility","visible")
			var count=parseInt($(this).siblings(".num").html());
			$(this).siblings(".num").html(count+=1);
			$(".foNum").html(count);
			$(".foNum").addClass("toBig");
			time=setTimeout(function(){
				$(".foNum").removeClass("toBig");
			},100);
			price_add(num);
			//创建对象保存商品的信息：图片路径 商品名 价格 数量
			var sells_news={
				/////
				///
				///
				///
				///
			}
			sessionStorage.setItem(sells_news.index,JSON.stringify(sells_news));
			
		})
		//减号
		$(".cu").click(function(){
			if($(this).siblings(".num").html()==0){
				$(this).css("visibility","hidden");
				$(this).siblings(".num").css("visibility","hidden");
				$(".foNum").css("visibility","hidden")
			}
			var count=parseInt($(this).siblings(".num").html());
			$(this).siblings(".num").html(count-=1);
			$(".foNum").html(count);
			//给购物车上面的小圆圈添加动画
			$(".foNum").addClass("toBig");
			time=setTimeout(function(){
				$(".foNum").removeClass("toBig");
			},100);
			price_add(num);
			if($(".foNum").html()==0){
				$(".foNum").hide();
			}
			//创建对象保存商品的信息：图片路径 商品名 价格 数量
			var sells_news={
				/////
				///
				///
				///
				///
			}
			sessionStorage.setItem(sells_news.index,JSON.stringify(sells_news));
			
			if(JSON.parse(sessionStorage.getItem(sells_news.index)).sells_num==0){
//				sessionStorage.removeItem($(this).parent().parent().index());
			}
			
		})
		//保存总数量
		function allNum(){
			var foNum=document.getElementByClassName(".foNum")[0];
			var sumNum={
				sum:foNum.innerHTML
			}
			var nam=foNum.className;
			sessionStorage.setItem(nam,JSON.stringify(sumNum));
		}
		//加减中间的span html置为0
		$(".num").html(0);
		var time;
		var arr=[];
		var n=0;
		//根据存储数据显示商品购买情况
		for(var i=0;i<sessionStorage.length;i++){
			var key=sessionStorage.key(i);
			var value=JSON.parse(sessionStorage.getItem(key));
			var mark=value.index;
			$(".cu").eq(mark).css("visibility","visible");
			////
			////
		}
		if(sessionStorage.length>0){
			$(".foNum").css("display","block")
			price_add(n);
		}
		
		
		
		
		
		
		
		
		
	}
//请求ajax
	function getData(){
		//热销榜
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php",
			data:{category:"热销榜"},
			async:true,
			success:function(req){
				var obj=JSON.parse(req)
				var strH="";
				$.each(obj.data,function(i,elem){	
					strH+="<div class='list'>"
						+"<div><img src="+elem.img+"></div>"
						+"<ul><li>"+elem.name+"</li>"
						+"<li><b>精选</b><span>"+elem.pm_desc+"</span></li>"
						+"<li>"+elem.specifics+"</li>"
						+"<li>￥"+elem.price+"<span>￥"+elem.market_price+"</span></li>"
						+"</ul><p><b class='cu'><img src='images/shcut.jpg'></b><span class='num'>1</span>"
						+"<b class='ad'><img src='images/add.jpg'></b></p></div>"
					$("#rx").html(strH);
				
				})	
				shopCar();	
			}
		});
		
	}


				
				
					
					
					
				
			














	
	return {
      	render:render,
		footImg:footImg,
		getData:getData
	}
	
})
