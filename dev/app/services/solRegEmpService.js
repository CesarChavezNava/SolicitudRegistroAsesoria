app.factory('SolRegEmpService', ['$http', function($http){
    var solRegEmpObj = {
        id: 1,
        fechaConvenio: new Date(2016, 1, 1),
        oficinaRegional: 'Oficina Naucalpan numero 1000',
        numeroConvenio: '3601PA908MNA090',
        datosIdentificacion: {
            institucionSolicitaRegistro: {
                nombreConstituyeInstitucion: 'Escuela niño Pobre de las alcantarillas'
            },
            nombreRepresentacionLegalInstitucion: {
                nombres: 'Rocio Cataluña',
                apellidoPaterno: 'Santiago',
                apellidoMaterno: 'Nava'
            },
            casoPersonaFisica: {
                claveRegistroFederal: 'MORI898393FG5',
                folioIdentificacionOficial: '390873947485335435'
            }
        }
    }

    return {
        get: function() {
            return solRegEmpObj; 
        }
    }
}]);