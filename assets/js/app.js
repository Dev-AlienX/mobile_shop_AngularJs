// main app module
app = angular.module('shoping', ['ngRoute','ui.bootstrap.tooltip']);
app.controller('bodyController', ['$scope','$rootScope','$window',
	function ($scope,$rootScope,$window) {
		$scope.initNew = function () {
			$scope.currentTimeIs = new Date().getHours();
			if ($scope.currentTimeIs >= 6) {
				$scope.bodyDarkLight = "bg-white";
			}
			else {
				$scope.bodyDarkLight = "bg-darken-gray";
			}
		}
		$rootScope.widthNew = $window.innerWidth;
        function onResize() {
            // uncomment for only fire when $window.innerWidth change   
            if ($rootScope.widthNew !== $window.innerWidth) {
                $rootScope.widthNew = $window.innerWidth;
                $rootScope.$digest();
            }
        };
        // $scope.widthNew = $window.innerWidth
        angular.element($window).on('resize', onResize);
	}
]);

app.filter('safeHtml', function ($sce) {
	return function (val) {
		return $sce.trustAsHtml(val);
	};
});
