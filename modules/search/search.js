define(['text!./search.html','css!./search.css'],function(html){
    function render(){
      $('.container').html(html);
    }
     
    return {
      render:render,
    }
})
