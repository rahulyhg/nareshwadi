var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('home', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService, $location) {
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
        TemplateService.content = "views/shop.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.navigationclass = "smaller";
        var categorysuccess = function (data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.content = newdata;
        };

        NavigationService.getallproductcategory().success(categorysuccess);

        var productfetched = function (data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.products = newdata;
        };
        $scope.fetchproducts = function (id) {
            NavigationService.getallproductsincategory(id).success(productfetched);
        };









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
            var newdata = JSON.parse(data.d);
            console.log(newdata);
            $scope.content = newdata;
        };
        NavigationService.getarticle(6).success(articlesuccess);
                                        }]);
phonecatControllers.controller('gallery', ['$scope', 'TemplateService', 'NavigationService',
                                        function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/gallery.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.navigationclass = "smaller";
        var gotgallerycategory = function (data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.content = newdata;
            $scope.fetchproducts(newdata[0].GalleryID, newdata[0].Title,0);
            
        };
        NavigationService.getgallerycategory().success(gotgallerycategory);
        $scope.blackoutimage = "";
        $scope.addblackout = function (img) {
            $scope.blackoutimage = img;
        }
        $scope.removeblackout = function () {
            $scope.blackoutimage = "";
        }

        var gotgalleryimages = function (data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.galleryimages = newdata;

        };

        $scope.fetchproducts = function (category, title,id) {
            for(var i=0;i<$scope.content.length;i++)
            {$scope.content[i].active="";}
            
            $scope.content[id].active="active";
            
            $scope.GalleryTitle = title;
            NavigationService.getcategoryimage(category).success(gotgalleryimages);
        };



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
            var newdata = JSON.parse(data.d);
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