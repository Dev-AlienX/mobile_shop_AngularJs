app.controller('compareController', ['$scope', '$http', '$log', '$location', 'newCompare', '$filter',
    function ($scope, $http, $log, $location, newCompare, $filter) {
        // debugger;
        $scope.compareShow = newCompare.list;
    }]);