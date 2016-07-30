(function () {
    angular.module('store').directive('productDetails', function(){
        return{
            restrict: 'E',
            templateUrl: './panels/product-details.html',
        };
    });
})();