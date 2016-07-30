(function () {
    angular.module('store').controller('productListController', function($scope, $http){
    $http.get('https://api.myjson.com/bins/395xr')
        .then(function(json){
            $scope.products = json.data;
        });
    $scope.displayPopUp = function(album){
        $scope.selectedProduct = album.product;
    }
})
})();