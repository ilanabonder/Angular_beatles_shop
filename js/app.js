/**
 * Created by itc_user on 7/30/2016.
 */
/**
 * Created by itc_user on 7/21/2016.
 */
(function () {
    var cart=[]
    var app = angular.module('store', ['ngRoute'])
        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: './templates/product-list.html',
                    controller: 'productListController'
                })
                .when('/cart', {
                    templateUrl: './templates/cart.html',
                    controller: 'cartController'
                });
        });

        //Directives
            //navbar
                app.directive('ngNavbar', function(){
                    return{
                        restrict: 'E',
                        templateUrl: './templates/navbar.html'
                    };
                });

            //popup
            app.directive('productPopup', function(){
                return{
                    restrict: 'E',
                    templateUrl: './templates/product-details.html'
                };
    });

        //controller
            //product list
                app.controller('productListController', function($scope, $http){
                    $http.get('https://api.myjson.com/bins/395xr')
                        .then(function(json){
                            $scope.products = json.data;
                        });
                    $scope.displayPopUp = function(album){
                        $scope.selectedProduct = album.product;
                    }
                })

                app.controller("PanelController", function () {
                    this.tab =1;

                    this.selectTab = function(setTab){
                        this.tab = setTab;
                    };
                    this.isSelected = function(checkTab){
                        return this.tab === checkTab;
                    };
                });

                app.controller("ReviewController", function(){
                    this.review ={};

                    this.addReview = function (product) {
                        product.reviews.push(this.review);
                        this.review = {};
                    };
                });

                app.controller("cartController", function($scope){
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

