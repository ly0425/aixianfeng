define(['text!./integral.html','css!./integral.css'],function(html){
    function render(){
      $('.container').html(html);
    }
     
    return {
      render:render,
    }
})
