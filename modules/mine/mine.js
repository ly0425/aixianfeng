define(['text!./mine.html','css!./mine.css'],function(html){
    function render(){
      $('.container').html(html);
    }
     //foot换图片
    function footImg(){
		$(".footA5").click(function(){
			$(this).children(".foImg").children("img").attr("src","images/foot51.jpg");
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

    return {
      render:render,
      footImg:footImg
    }
})
