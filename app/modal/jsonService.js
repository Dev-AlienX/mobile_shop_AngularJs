// app.controller('dataService', ['$scope', '$http', function ($scope, $http) {
//     var url = 'http://localhost:3020/mobile';
//     $http.get(url).success(function (response) {
//         $scope.config = response;
//         console.log($scope.config);
//     })

// }]);

// app.service("jsonService", ["$http", "$q", function ($http, $q)
// {
//     var deferred = $q.defer();

//     $http.get("./assets/json/home.json").then(function (data)
//     {
//         deferred.resolve(data);
//     });

//     this.getHomeItems = function ()
//     {
//         return deferred.promise;
//     }
// }]);

app.factory('mobDetail', ['$http', function ($http) {
    var mobDetail = {};
    mobDetail.get = $http.get('app/modal/mobile.json').then(function (resp) {
        return resp.data;
    });
    mobDetail.all = function () {
        return mobDetail.get;
    };
    return mobDetail;
}]);

app.factory('filterDetail', ['$http', function ($http) {
    var filterDetail = {};
    filterDetail.get = $http.get('app/modal/productFilters.json').then(function (response) {
        return response.data;
    });
    filterDetail.all = function () {
        return filterDetail.get;
    };
    return filterDetail;
}]);

app.factory('pinCode', ['$http', function ($http) {
    var pinCode = {};
    pinCode.get = $http.get('http://localhost:3020/thane').then(function (response) {
        return response.data;
    });
    pinCode.all = function () {
        return pinCode.get;
    };
    return pinCode;
}]);