app.directive('perColumn', function(){
    return {
        restrict: 'EA',
        link: function(scope, element, attrs) {
            // attrs.size = clase con el tamaño de la columna materialize
            // attrs.type = tipo del input
            // attrs.id = id del input y for del label
            // attrs.model = modelo correspondiente del ng-model
            // attrs.text = texto del elemento
            
            element.find("div")[0].classList.add(attrs.size);
            element.find("input")[0].setAttribute("type", attrs.type);
            element.find("input")[0].setAttribute("id", attrs.id);
            element.find("input")[0].setAttribute("ng-model", "{{" + attrs.model + "}}");
            element.find("label")[0].setAttribute("for", attrs.id);
            element.find("label")[0].innerText = attrs.text;

            if(attrs.type === "date") {
                element.find("label")[0].classList.add("active");
            }
        },
        template: '<div class="input field col"><label></label><input></div>'
    }
});