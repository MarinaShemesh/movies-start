var app = angular.module('movieLibrary', []);

app.directive("movieDirective", function () {
    return {
      templateUrl: 'movie.html',
      scope: {
        movie: '=myMovie'//note that the movies are one after each other
      },                 //since it is now longer an ng-repeat
      
      link: function (scope, elem, attrs) {          
      elem[0].innerHTML = "Just write this!";

    };
});