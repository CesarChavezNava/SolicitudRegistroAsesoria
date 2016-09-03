app.controller('FormCtrl', ['$scope', '$rootScope', 'formService', function($scope, $rootScope, formService){
    $scope.component = {};
    $scope.components = [];
    formService.create();
    formService.all();
}]);