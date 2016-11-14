define(['text!./fresh.html','css!./fresh.css'],function(html){
    function render(){
      $('.container').html(html);
    }
    //foot换图片
    function footImg(){
		$(".footA3").click(function(){
			$(this).children(".foImg").children("img").attr("src","images/foot31.jpg");
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
//  if(location.hash=="#send"){
//			send_img.src="img/send_bottom_02.jpg";
//			main_img.src="img/booking_bottom_01.jpg"
//			booking_img.src="img/bottom_3.jpg"
//			shopping_img.src="img/bottom_4.jpg"
//			my_img.src="img/bottom_5.jpg"
//		}
//请求ajax
	function getData(){
		//新鲜预定
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php",
			async:true,
			success:function(req){
				var obj=JSON.parse(req)
				var strH="";
				$.each(obj.product,function(i,elem){	
					strH+="<div class='fr'>"
						+"<div><img src="+elem.img+"></div>"
						+"<div><p>"+elem.name+"</p>"
						+"<span>￥"+elem.price+"</span></div>"
						+"<b><img src='images/add.jpg'></b></div>"
					$("#yud").html(strH);
				
				})	
			}
		});
		
		
	}

    return {
      render:render,
      footImg:footImg,
      getData:getData
    }
})
