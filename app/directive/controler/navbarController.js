app.controller('navbarController', ['$scope', '$http', '$log', '$filter', '$location', 'mobDetail', 'productDetail',
    function ($scope, $http, $log, $location, $filter, mobDetail, productDetail) {
        $scope.detailView = [];
        $scope.moreDetail = function (mobileToView) {
            $scope.detailView.push(angular.copy(mobileToView));
            productDetail.list = $scope.detailView;
        };
        // create a message to display in view
        $scope.home = 'home';
        $scope.selected = '';
        $scope.created = false;

        $scope.mobileSearch = [];
        mobDetail.all().then(function (resp) {
            $scope.mobileSearch = resp;
        });
        $scope.currentTimeIs = "";
        $scope.init = function () {
            $scope.currentTimeIs = new Date().getHours();
            if ($scope.currentTimeIs >= 6 && $scope.currentTimeIs <= 20) {
                $scope.sunShine = "block";
                $scope.moonLight = "none";
                $scope.navbarDarkLight = "bg-purpal";
                $scope.navbarBrandDarkLight = "text-light";
                $scope.bgDarkLight = "bg-white";
                $scope.shopDarkLight = "text-dark bg-white";
                $scope.filterDarkLight = "bg-light text-dark";
                $scope.mobileDarklight = "alart-pad";
                $scope.addToCart = "btn-info";
                $scope.addedDayNight = "btn-success";
                
            }
            else {
                $scope.moonLight = "block";
                $scope.sunShine = "none";
                $scope.navbarDarkLight = "bg-dark";
                $scope.navbarBrandDarkLight = "text-light";
                $scope.bgDarkLight = "bg-black";
                $scope.searchDarkLight = "bg-dark";
                $scope.shopDarkLight = "text-light bg-lightenGray";
                $scope.filterDarkLight = "bg-dark text-light";
                $scope.mobileDarklight = "alart-pad-dark";
                $scope.addToCart = "btn-outline-info";
                $scope.addedDayNight = "btn-outline-success";

            }
        };
        $scope.dark = function () {
            $scope.moonLight = "block";
            $scope.sunShine = "none";
            $scope.navbarDarkLight = "bg-dark";
            $scope.navbarBrandDarkLight = "text-light";
            $scope.bgDarkLight = "bg-black";
            $scope.searchDarkLight = "bg-dark";
            $scope.shopDarkLight = "text-light bg-lightenGray";
            $scope.filterDarkLight = "bg-dark text-light";
            $scope.mobileDarklight = "alart-pad-dark";
            $scope.addToCart = "btn-outline-info";
            $scope.addedDayNight = "btn-outline-success";
        }
        $scope.light = function () {
            $scope.sunShine = "block";
            $scope.moonLight = "none";
            $scope.navbarDarkLight = "bg-purpal";
            $scope.navbarBrandDarkLight = "text-light";
            $scope.bgDarkLight = "bg-white";
            $scope.searchDarkLight = "bg-light";
            $scope.shopDarkLight = "text-dark bg-white";
            $scope.filterDarkLight = "bg-light text-dark";
            $scope.mobileDarklight = "alart-pad";
            $scope.addToCart = "btn-info";
            $scope.addedDayNight = "btn-success";
        }

        $scope.state = closed;
        $scope.change = function () {
            var filtered;
            filtered = $filter('filter')($scope.mobileSearch, $scope.query);
            return $scope.state = filtered.length > 0 ? opened : 'closed';
        };
        $scope.select = function (items) {
            $scope.selected = items;
            return $scope.state = closed;
        };
        return $scope.clear = function () {
            $scope.query = '';
            $scope.selected = '';
            return $scope.cleared = true;
        };
    }
]);

// app.directive('xngFocus', function () {
//     return function (scope, element, attrs) {
//         return scope.$watch(attrs.xngFocus, function (newValue) {
//             console.log(newValue);
//             return newValue && element[0].focus();
//         });
//     };
// });
