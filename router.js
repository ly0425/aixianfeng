define(['backbone'],function(){
  
  var Router = Backbone.Router.extend({

      routes: {
        "home": "homeFn",
        "market": "marketFn",
        "fresh": "freshFn",
        "shop": "shopFn",
        "mine": "mineFn",
        "seckill": "seckillFn",
        "search":"searchFn",
        "myorder":"myorderFn",
        "integral":"integralFn",
        "*actions":'defaultAction'
      },

      homeFn: function() {
          require(['./modules/home/home.js'],function(home){
            home.render();
            home.loopImg();
            home.footImg();
            home.addCar();
            home.getData();
          })
      },
      marketFn: function() {
        require(['./modules/market/market.js'],function(market){
          market.render();
          market.footImg();
          market.getData();
        })
      },
      freshFn: function() {
		 require(['./modules/fresh/fresh.js'],function(fresh){
          fresh.render();
          fresh.footImg();
          fresh.getData();
        })
      },
      shopFn: function() {
		 require(['./modules/shop/shop.js'],function(shop){
          shop.render();
          shop.footImg();
        })
      },
      mineFn: function() {
		 require(['./modules/mine/mine.js'],function(mine){
          mine.render();
          mine.footImg();
        })
      },
      //疯狂秒杀
       seckillFn: function() {
          require(['./modules/seckill/seckill.js'],function(seckill){
          seckill.render();
          seckill.getData();
          })
      },
       //首页头部搜索
       searchFn: function() {
          require(['./modules/search/search.js'],function(search){
          search.render();
          })
      },
      //我的订单
       myorderFn: function() {
          require(['./modules/myorder/myorder.js'],function(myorder){
          myorder.render();
          })
      },
      //积分商城
       integralFn: function() {
          require(['./modules/integral/integral.js'],function(integral){
          integral.render();
          })
      },
      defaultAction:function(){
        location.hash = 'home'
      }

  });

  var router = new Router();
})

