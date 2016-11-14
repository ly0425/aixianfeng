define(['text!./seckill.html','css!./seckill.css'],function(html){
    function render(){
      $('.container').html(html);
    }
//请求ajax
	function getData(){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apimiaosha.php",
			async:true,
			success:function(req){
				var obj=JSON.parse(req)
				var strH="";
				$.each(obj.product,function(i,elem){	
					strH+="<div class='su'>"
						+"<div><img src="+elem.img+"></div>"
						+"<ul><li>"+elem.name+"</li>"
						+"<li>"+elem.specifics+"</li>"
						+"<li><span>￥<b>"+elem.price+"</b></span>/原价"+elem.market_price+"元</li>"
						+"<li><a href='#'>"+elem.btnText+"</a></li>"
						+"</ul></div>"
					$("#main").html(strH);
				
				})	
			}
		});
		
		
		
	}

    return {
      render:render,
      getData:getData
    }
})
