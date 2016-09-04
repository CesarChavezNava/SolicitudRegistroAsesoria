app.directive('perDate', function(){
    return {
        restrict: 'E',
        scope: {
            id: '@id',
            texto: '@texto'
        },
        template: '<input id="{{ id }}" type="date" value=""><label for="{{ id }}" class="active">{{ texto }}</label>'
    }
});