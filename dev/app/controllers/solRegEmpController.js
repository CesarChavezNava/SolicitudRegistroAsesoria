app.controller('SolRegEmpCtrl', [ '$scope', '$rootScope', 'SolRegEmpService',
		function($scope, $rootScope, SolRegEmpService) {

			$scope.leerEjemplo = function() {
				$scope.solRegEmpObj = SolRegEmpService.get();
			}

		} ]);