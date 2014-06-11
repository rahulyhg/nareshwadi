var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('home', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService,$location) {
        $scope.template = TemplateService;
        TemplateService.content = "views/content.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.navigationclass = "";
  }]);
phonecatControllers.controller('shop', ['$scope', 'TemplateService', 'NavigationService',
                                        function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/internalcontent.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        
        $scope.navigationclass = "smaller";
        var articlesuccess = function (data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.content = newdata;


        };
        NavigationService.getarticle(4).success(articlesuccess);
                                        }]);
phonecatControllers.controller('contact', ['$scope', 'TemplateService', 'NavigationService',
                                        function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/internalcontent.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
      
        $scope.navigationclass = "smaller";
        var articlesuccess = function (data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.content = newdata;


        };
        NavigationService.getarticle(6).success(articlesuccess);
                                        }]);
phonecatControllers.controller('gallery', ['$scope', 'TemplateService', 'NavigationService',
                                        function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/internalcontent.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
       
        $scope.navigationclass = "smaller";
        var articlesuccess = function (data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.content = newdata;


        };
        NavigationService.getarticle(7).success(articlesuccess);
                                        }]);
phonecatControllers.controller('donate', ['$scope', 'TemplateService', 'NavigationService',
                                           function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/internalcontent.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    
        $scope.navigationclass = "smaller";
        var articlesuccess = function (data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.content = newdata;


        };
        NavigationService.getarticle(5).success(articlesuccess);

                                           }]);
phonecatControllers.controller('futureproject', ['$scope', 'TemplateService', 'NavigationService',
                                        function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/internalcontent.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
       
        $scope.navigationclass = "smaller";
        var articlesuccess = function (data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.content = newdata;


        };
        NavigationService.getarticle(3).success(articlesuccess);
                                        }]);
phonecatControllers.controller('whatwedo', ['$scope', 'TemplateService', 'NavigationService',
                                        function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/internalcontent.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
      
        $scope.navigationclass = "smaller";
        var articlesuccess = function (data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.content = newdata;


        };
        NavigationService.getarticle(2).success(articlesuccess);
                                        }]);
phonecatControllers.controller('about', ['$scope', 'TemplateService', 'NavigationService',
                                            function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/internalcontent.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
       
        $scope.navigationclass = "smaller";
        var articlesuccess = function (data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.content = newdata;


        };
        NavigationService.getarticle(1).success(articlesuccess);
                                            }]);

phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService',
 function ($scope, TemplateService) {
        $scope.template = TemplateService;
  }]);