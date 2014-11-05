var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('home', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService, $location) {
        $scope.template = TemplateService;
        TemplateService.content = "views/content.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.navigationclass = "smaller";
        var slides = $scope.slides = [{
            image: "img/slider/023.jpg"
        }, {
            image: "img/slider/022.jpg"
        }, {
            image: "img/slider/021.jpg"
        }, {
            image: "img/slider/020.jpg"
        }, {
            image: "img/slider/019.jpg"
        }];
    }
]);

phonecatControllers.controller('shop', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/shop.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.navigationclass = "smaller";
        var categorysuccess = function(data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.content = newdata;
        };

        NavigationService.getallproductcategory().success(categorysuccess);

        var productfetched = function(data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.products = newdata;
        };
        $scope.fetchproducts = function(id) {
            NavigationService.getallproductsincategory(id).success(productfetched);
        };

        var slides = $scope.slides = [{
            image: "img/slider/015.jpg"
        }, {
            image: "img/slider/017.jpg"
        }, {
            image: "img/slider/016.jpg"
        }, {
            image: "img/slider/018.jpg"
        }];

    }
]);

phonecatControllers.controller('contact', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/internalcontent.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.navigationclass = "smaller";
        var articlesuccess = function(data, status) {
            var newdata = JSON.parse(data.d);
            console.log(newdata);
            $scope.content = newdata;
        };
        var slides = $scope.slides = [{
            image: "img/slider/018.jpg"
        }, {
            image: "img/slider/017.jpg"
        }, {
            image: "img/slider/001.jpg"
        }, {
            image: "img/slider/002.jpg"
        }];

        NavigationService.getarticle(6).success(articlesuccess);


    }
]);

phonecatControllers.controller('gallery', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/gallery.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.navigationclass = "smaller";
        var gotgallerycategory = function(data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.content = newdata;
            $scope.fetchproducts(newdata[0].GalleryID, newdata[0].Title, 0);

        };
        NavigationService.getgallerycategory().success(gotgallerycategory);
        $scope.blackoutimage = "";
        $scope.addblackout = function(img) {
            $scope.blackoutimage = img;
        }
        $scope.removeblackout = function() {
            $scope.blackoutimage = "";
        }

        var gotgalleryimages = function(data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.galleryimages = newdata;

        };

        $scope.fetchproducts = function(category, title, id) {
            for (var i = 0; i < $scope.content.length; i++) {
                $scope.content[i].active = "";
            }

            $scope.content[id].active = "active";

            $scope.GalleryTitle = title;
            NavigationService.getcategoryimage(category).success(gotgalleryimages);
        };



    }
]);
phonecatControllers.controller('donate', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/internalcontent.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.navigationclass = "smaller";
        var articlesuccess = function(data, status) {
            var newdata = JSON.parse(data.d);
            console.log(newdata);
            $scope.content = newdata;


        };
        NavigationService.getarticle(5).success(articlesuccess);
        var slides = $scope.slides = [{
            image: "img/slider/012.jpg"
        }, {
            image: "img/slider/013.jpg"
        }, {
            image: "img/slider/014.jpg"
        }, {
            image: "img/slider/011.jpg"
        }];

    }
]);
phonecatControllers.controller('futureproject', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/internalcontent.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.navigationclass = "smaller";
        var articlesuccess = function(data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.content = newdata;


        };
        NavigationService.getarticle(3).success(articlesuccess);
        var slides = $scope.slides = [{
            image: "img/slider/014.jpg"
        }, {
            image: "img/slider/013.jpg"
        }, {
            image: "img/slider/012.jpg"
        }, {
            image: "img/slider/011.jpg"
        }];
    }
]);
phonecatControllers.controller('whatwedo', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/internalcontent.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.navigationclass = "smaller";
        var articlesuccess = function(data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.content = newdata;


        };
        NavigationService.getarticle(2).success(articlesuccess);

        var slides = $scope.slides = [{
            image: "img/slider/010.jpg"
        }, {
            image: "img/slider/009.jpg"
        }, {
            image: "img/slider/008.jpg"
        }, {
            image: "img/slider/007.jpg"
        }];

    }
]);
phonecatControllers.controller('about', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.content = "views/internalcontent.html";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.navigationclass = "smaller";
        var articlesuccess = function(data, status) {
            var newdata = JSON.parse(data.d)
            console.log(newdata);
            $scope.content = newdata;


        };
        NavigationService.getarticle(1).success(articlesuccess);

        var slides = $scope.slides = [{
            image: "img/slider/006.jpg"
        }, {
            image: "img/slider/005.jpg"
        }, {
            image: "img/slider/004.jpg"
        }, {
            image: "img/slider/003.jpg"
        }];


    }
]);

phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService',
    function($scope, TemplateService) {
        $scope.template = TemplateService;
    }
]);

phonecatControllers.controller('slidectrl', ['$scope', 'TemplateService',
    function($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.myInterval = 5000;



    }
]);