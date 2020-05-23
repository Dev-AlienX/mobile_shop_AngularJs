// (['$scope', '$routeProvider', '$locationProvider', function ($scope, $routeProvider, $locationProvider) 

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {

                templateUrl: 'app/component/view/home.html',
                controller: 'homeController'
            })
            .when('/shop', {

                templateUrl: 'app/component/view/shop.html',
                controller: 'shopController'
            })
            .when('/detail', {

                templateUrl: 'app/component/view/detail.html',
                controller: 'detailController'
            })
            .when('/cart', {

                templateUrl: 'app/component/view/cart.html',
                controller: 'cartController'
            })
            .when('/compare', {

                templateUrl: 'app/component/view/compare.html',
                controller: 'compareController'
            });

    }
]);
// app.run(function ($rootScope, $location, mobDetail, newCart, newCompare) {
//     debugger;
//     // register listener to watch route changes
//     $rootScope.$on("$routeChangeStart", function (event, next, current) {
//         if (mobDetail.all.length === 0 || newCart.list.length === 0 || newCompare.list.length === 0 && $location.$$path === "/detail" || $location.$$path === "/cart" || $location.$$path === "/compare") {
//             // no logged user, we should be going to #login
//             // not going to #login, we should redirect now
//             // $location.$$path = "/";
//             $location.url("/");
//         }
//         break;
//     });
// });