(function () {
    angular.module('store').controller("ReviewController", function(){
    this.review ={};

    this.addReview = function (product) {
        reviews.push(this.review);
        this.review = {};
    };
});
})();