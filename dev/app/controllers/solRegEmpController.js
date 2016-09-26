app.controller('SolRegEmpCtrl', ['$scope', '$rootScope', 'SolRegEmpService', function($scope, $rootScope, SolRegEmpService){
    $scope.solRegEmpObj = SolRegEmpService.get();
}]);