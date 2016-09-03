app.directive('createComponent', function(){
    var getTemplate = function(component) {
        if( component.comp === 'input' ){
            return getInput(component);
        }
        return 'ERROR';
    };

    var getInput = function(component) {
        var strComponent = '';
        strComponent += '<div class="input-field col s6">';
        strComponent += '<input class="validate" placeholder="' + component.placeholder + '" type="' + component.type + '">';
        strComponent += '<label for="' + component.label.replace(" ","_") + '">' + component.label + '</label>';
        strComponent += '</div>';
        return strComponent;  
    };

    return {
        restrict: 'E',
        link: function(scope, element, attrs){
            scope.component = JSON.parse(attrs.component);
            element.html(getTemplate(scope.component));
        }        
    }
});