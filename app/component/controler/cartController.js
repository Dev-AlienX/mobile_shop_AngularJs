app.controller('cartController', ['$scope', '$http', '$log', '$location', 'newCart','$filter','filterDetail', 'pinCode',
    function ($scope, $http, $log, $location, newCart,$filter,filterDetail, pinCode) {
        // debugger;
        $scope.cartShow = newCart.list;

        $scope.RemoveCart = function (item) {
            var index = $scope.cartShow.indexOf(item)
            $scope.cartShow.splice(index, 1);
        }

        // $scope.getTotal = function () {
        //     var total = reduce($scope.cart, function (sum, mobile) {
        //         return sum + $scope.getCost(mobile);
        //     }, 0);
        //     console.log('total: ' + total);
        //     return total;
        // };

        var findmobileById = function (cartShow, id) {
            return find(cartShow, function (carts) {
                return carts.id === id;
            });
        };
        $scope.tempScope = function (mobileAdd) {
            var found = findmobileById($scope.cart, mobileAdd.id);
            if (found) {
                found.qty += mobileAdd.qty;
            }
        }
        $scope.costByQty = '';
        $scope.getCost = function (carts) {
            $scope.costByQty = carts.qty * carts.price;
        };

        $scope.clearCart = function () {
            $scope.cartShow.length = 0;
        };

        $scope.addQty = function (carts) {
            return carts.qty + 1;
        }

        $scope.area = [];
        // Chapters  json data
        pinCode.all().then(function (response) {
            $scope.area = response;
            console.log($scope.area);
        });
       
        $scope.checkPin = "check";
        // for (var i = 0; i < $scope.dataBase.length; i++)
        $scope.pinCheck = function () {
        //    debugger;
            for (var j = 0; j < $scope.area.length; j++) {
                if ($scope.givePin == $scope.area[j]) {
                    $scope.checkPin = "avalable";
                    break;
                }
                $scope.checkPin = "Not avalable";
            }
            
        }
         
        $scope.totalPriceOfCart = function(){
            var total = 0;
            for(var i = 0; i < $scope.cartShow.length; i++){
                var carts = $scope.cartShow[i];
                total += (carts.price * carts.qty);
            }
            return total;
        }
    }

]);