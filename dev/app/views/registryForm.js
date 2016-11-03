var input_selector = 'input[type=text], input[type=date], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
$(document).ready(function() {
	activeInputsValidClass();
});

$('.datepicker').pickadate({
	selectMonths : true, // Creates a dropdown to control month
	selectYears : 15
// Creates a dropdown of 15 years to control year
});

function activeInputsValidClass() {
	$(input_selector).each(function(index, element) {
		if ($(element).val().length > 0) {
			$(this).addClass('valid');
		}
	});
}
function reloadInputs(){
	$(document).ready(function() {
		Materialize.updateTextFields();
		activeInputsValidClass();
	});	
}
