(function () {
    angular.module('store').directive('ngNavbar', function(){
        return{
            restrict: 'E',
            templateUrl: 'panels/navbar.html'
        };
    });

})();