app.factory('SolRegEmpService', ['$http', function($http){
    var solRegEmpObj = {
        id: 1,
        fechaConvenio: '02/11/2016',
        oficinaRegional: 'Oficina Naucalpan numero 1000',
        numeroConvenio: '3601PA908MNA090',
        datosIdentificacion: {
            institucionSolicitaRegistro: {
                nombreConstituyeInstitucion: 'Escuela niño pobre de las alcantarillas'
            },
            nombreRepresentacionLegalInstitucion: {
                nombres: 'Rocio Cataluña',
                apellidoPaterno: 'Santiago',
                apellidoMaterno: 'Nava'
            },
            casoPersonaFisica: {
                claveRegistroFederal: 'MORI898393FG5',
                folioIdentificacionOficial: '390873947485335435',
                numeroActaConstitutiva: "51816874358"
            }
        }
    }
    return {
        get: function() {
            return solRegEmpObj; 
        }
    }
}]);