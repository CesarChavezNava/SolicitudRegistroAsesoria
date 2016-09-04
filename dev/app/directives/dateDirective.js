app.directive('perDate', function(){
    return {
        restrict: 'E',
        scope: {
            clase: '@clase',
            id: '@id',
            texto: '@texto'
        },
        template: '<div class="{{ clase }}"><input id="{{ id }}" type="date" value=""><label for="{{ id }}" class="active">{{ texto }}</label></div>'
    }
});