app.controller('navbarCtrl', [ '$scope', '$rootScope', 'SolRegEmpService',
		function($scope, $rootScope, SolRegEmpService) {

			$scope.leerEjemplo = function() {
				$rootScope.solRegEmpObj = SolRegEmpService.get();
				reloadInputs();
			}

		} ]);