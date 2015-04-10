var app = angular.module('myApp', ['ngNewRouter']);

app.config(function ($componentLoaderProvider) {
  $componentLoaderProvider.setTemplateMapping(function (name) {
    // load templates directly from `/`
    return name + '.html';
  })
})

app.controller('AppController', function($router) {
  $router.config([
    {
      path: '/',
      component: 'home'
    },
    {
      path: '/user',
      component: 'user'
    },
    {
      path: '/first',
      component: 'first'
    },
    {
      path: '/second/:controllerId',
      component: 'second'
    }
  ])
});

app.controller('HomeController', function () {
  this.name = 'Patyal';
  
});

app.controller('UserController', function () {
  this.clickMe = function(){
    this.afterClick = "Thank you :P";
  }
});

app.controller('FirstController', function(){
  this.name = 'Karan first';
  
  this.changeName = function(){
    this.name = "Karan Patyal";
  };
});

app.controller('SecondController', function($routeParams){
  this.controllerId = $routeParams.controllerId
});