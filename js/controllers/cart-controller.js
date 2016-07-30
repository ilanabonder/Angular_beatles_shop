(function () {
    angular.module('store').controller("cartController", function($scope){
    $scope.cart = cart;
    $scope.addToCart = function(addedProduct){
        var isInCart = false;
        for (var i=0; i<cart.length; i++){
            if (cart[i].name == addedProduct.name){
                isInCart= true;
                cart[i].quantity+= 1;
            }
        }
        if(!isInCart){
            Object.assign(addedProduct,{"quantity":1})
            cart.push(addedProduct)
        }
    }
    $scope.removeItem = function(removedProduct){
        cart.splice(removedProduct, 1);
    }
    $scope.sumPrices = function(){
        var productSum = 0;
        for (var i=0; i<$scope.cart.length; i++){
            productSum+=$scope.cart[i].price*$scope.cart[i].quantity
        }

        return productSum;
    };
    $scope.numItems = function(){
        var countItems = 0;
        for (var i=0; i<$scope.cart.length; i++){
            countItems+=$scope.cart[i].quantity
        }
        return countItems
    };
})
})();