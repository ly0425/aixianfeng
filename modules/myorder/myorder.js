define(['text!./myorder.html','css!./myorder.css'],function(html){
    function render(){
      $('.container').html(html);
    }
     
    return {
      render:render,
    }
})
