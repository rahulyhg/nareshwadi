var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {

    var navigationclass = "";
    var navigation = [{
            name: "Home",
            marathiname: "मुख्य पान",
            classis: "active",
            link: "#/home",
            color: "rgb(174, 0, 25)",
            icon: "glyphicon-home",
            left: "145px",
            top: "12.999999999999993px",
            text_left: "225px",
            text_top: "53.5px",


    }, {
            name: "Shop",
            marathiname: "दुकान",
            active: "",
            link: "#/shop",
            color: "#007A31",
            icon: "glyphicon-shopping-cart",
            left: "238.3380951166243px",
            top: "51.661904883375726px",
            text_left: "400.00892834367056px",
            text_top: "114.71468273201157px",


    }, {
            name: "Contact",
            marathiname: "संबंध",
            classis: "",
            link: "#/contact",
            color: "rgb(174, 0, 25)",
            icon: "glyphicon-earphone",
            left: "277px",
            top: "145px",
            text_left: "472.5px",
            text_top: "262.5px",

    }, {
            name: "Gallery",
            marathiname: "प्रतिमा",
            classis: "",
            link: "#/gallery",
            color: "#007A31",
            icon: "glyphicon-camera",
            left: "238.3380951166243px",
            top: "238.33809511662423px",
            text_left: "400.00892834367056px",
            text_top: "410.2853172679884px",

    }, {
            name: "Donate",
            marathiname: "दान",
            classis: "",
            link: "#/donate",
            color: "rgb(174, 0, 25)",
            icon: "glyphicon-leaf",
            left: "145px",
            top: "277px",
            text_left: "225px",
            text_top: "471.5px",

    },
        {
            name: "Projects",
            marathiname: "प्रकल्प",
            classis: "",
            link: "#/futureproject",
            color: "#007A31",
            icon: "glyphicon-send",
            left: "51.66190488337574px",
            top: "238.3380951166243px",
            text_left: "56.991072px",
            text_top: "410.28531726798843px",

                      },
        {
            name: "What We Do",
            marathiname: "आपण काय",
            classis: "",
            link: "#/whatwedo",
            color: "rgb(174, 0, 25)",
            icon: "glyphicon-road",
            left: "12.999999999999993px",
            top: "145.00000000000003px",
            text_left: "-35.00000000000001px",
            text_top: "262.50000000000006px",

                      },
        {
            name: "About",
            marathiname: "विषयी",
            classis: "",
            link: "#/about",
            color: "#007A31",
            icon: "glyphicon-user",
            left: "51.66190488337571px",
            top: "51.66190488337574px",
            text_left: "49.99107165632947px",
            text_top: "114.7146827320116px",

                      }];

    return {
        getnav: function () {


            return navigation;
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        changenavigationclass: function (classname) {
            navigationclass = classname;
            return navigationclass;
        },
        getarticle: function (articleid) {
            return $http.post('http://180.179.50.116/nareshwadi/REST/API.aspx/GetArticleByID', {
                id: articleid
            });
        },
        getallproductcategory: function () {
            return $http.post('http://180.179.50.116/nareshwadi/rest/API.aspx/GetProductCategoryAll', {});
        },
        getallproductsincategory: function (id) {
            return $http.post('http://180.179.50.116/nareshwadi/rest/API.aspx/GetProductByCategoryID', {
                ID: id
            });
        },
        getgallerycategory: function (id) {
            return $http.post('http://180.179.50.116/nareshwadi/rest/API.aspx/GetGalleryCategoryAll', {});
        },
        getcategoryimage: function (id) {
        console.log(id);
            return $http.post('http://180.179.50.116/nareshwadi/rest/API.aspx/GetGalleryByCategoryID', {id:id});
        }

    }
});