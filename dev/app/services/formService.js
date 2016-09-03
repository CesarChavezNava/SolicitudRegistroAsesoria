app.factory('formService', ['$http', function($http){
    var components = [];
    var id = '';
    var model = "user.";

    var createArrayComponents = function(data) {
        extractObject(data[0], id, model);
    };

    var extractObject = function(data, idRoot, modelRoot) {
        angular.forEach(data, function(value, key) {
            if ( typeof value === 'string') {
                components.push({
                    typeComponent: 'input',
                    label: key,
                    type: 'text',
                    id: 'txt' + key,
                    name: key,
                    placeholder: key,
                    model: modelRoot + key,
                    required: true,
                    idRoot: idRoot
                });
            }
            else if ( typeof value === 'number') {
                components.push({
                    typeComponent: 'input',
                    label: key,
                    type: 'number',
                    id: 'num' + key,
                    name: key,
                    placeholder: key,
                    model: modelRoot + key,
                    required: true,
                    idRoot: idRoot
                });
            }
            else if (typeof value === 'object'){
                components.push({
                    typeComponent: 'div',
                    label: key,
                    type: '',
                    id: 'div' + key,
                    name: '',
                    placeholder: '',
                    model: '',
                    required: false,
                    idRoot: idRoot,
                });
                
                modelRoot += key + ".";
                extractObject(value, key, modelRoot);
            }
        });
    };

    return {
        create: function(){
            $http({
                method: 'GET',
                url: 'http://jsonplaceholder.typicode.com/users',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function(response){
                createArrayComponents(response.data);
            }, function(reason){
                console.log(reason);
            });
        },
        all: function() {
            console.log(components);
            //return components;
        }
    }
}]);