angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    var place={};
    $scope.addListing = function(){
      var newlisting = {
        "code": $scope.code2,
        "name": $scope.name2,
        "coordinates": {
            "latitude": $scope.lat,
            "longitude": $scope.long
        },
        "address": $scope.address2
      };
      Listings.push(newlisting);
      console.log("New Listing Pushed");
    };

$scope.deleteListing = function(place) {
        var k = Listings.indexOf(place);
      Listings.splice(k,1);
};

$scope.showDetails = function(place) {
  $scope.name = place.name;
  $scope.code = place.code;
  $scope.coordinateslat = place.coordinates.latitude;
  $scope.coordinateslong = place.coordinates.longitude;
  $scope.address = place.address;
};

    $scope.setPlace= function(place) {
      place=place;
    }
  }
]);
