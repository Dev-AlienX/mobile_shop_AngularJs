app.controller('homeController', ['$scope', '$http', '$log', '$location', 'mobDetail', 'newCart',
    function ($scope, $http, $log, $location, mobDetail, newCart) {
        $scope.mgs = "this is home";
        $scope.displayMode = 'none'; // default value

        $scope.$watch('displayMode', function (value) {
            switch (value) {
                case 'mobile':
                console.log("fdsgd")
                case 'tablet':
                // do stuff for tablet mode
                // and so on
            }
        });
    }
]);