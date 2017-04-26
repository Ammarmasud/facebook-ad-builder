let app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  $scope.storeName="Jasper's Market";
  $scope.adText="It's fig season! Not sure what to do with figs? Here's a great desert reciple to share.";
  $scope.url="www.jaspers-market.com";
  $scope.urlTitle="Fig Tart with Almonds";
  $scope.urlDescription="The simplicity of this tart perfectly...";
  $scope.selectedImage;
});
