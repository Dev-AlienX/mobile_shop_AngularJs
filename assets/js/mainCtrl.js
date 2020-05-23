app.controller('mainCtrl', ['$rootScope', '$route', '$routeParams', '$location','$window',
    function MainCtrl($rootScope, $route, $routeParams,$window, $location) {
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;
        $rootScope.showNav = true;
        
    }
]);