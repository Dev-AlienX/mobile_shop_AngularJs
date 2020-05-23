app.controller('detailController', ['$scope', '$http', '$log', '$location', 'mobDetail', 'productDetail', 'newCart',
    function ($scope, $http, $log, $location, $filter, mobDetail, filterDetail, productDetail, newCart) {

        $scope.detailShow = mobDetail.list;
        console.log($scope.detailShow);
    }
]);