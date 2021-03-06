(function(){

  "use strict";

  angular.module('socsystem').controller('WishlistController', ['$scope', 'UserService',
    function( $scope, UserService ) {

      $scope.user = UserService.getLoggedUser();
      
      function _logoutSuccess() {
        $scope.user = null;
      }

      $scope.logout = function() {
        UserService.logout().then(_logoutSuccess);
      };

      $scope.aWishlistProducts = [
        {
          img: "../assets/img/camiseta1.jpg",
          title: "aaa",
          price: "50,30"
        },
        {
          img: "../assets/img/camiseta1.jpg",
          title: "aaa",
          price: "50,30"
        },
        {
          img: "../assets/img/camiseta1.jpg",
          title: "aaa",
          price: "50,30"
        },
        {
          img: "../assets/img/camiseta1.jpg",
          title: "aaa",
          price: "50,30"
        },
        {
          img: "../assets/img/camiseta1.jpg",
          title: "aaa",
          price: "50,30"
        }
      ];

    }
  ]);
})();
