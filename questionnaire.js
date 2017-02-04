var questionnaireForm = document.getElementById("questionnaireform");


questionnaireForm.addEventListener("submit", function (event) {
	event.preventDefault();
	var firstInput = document.getElementById("firstinput")
	var secondInput = document.getElementById("secondinput")
	var thirdInput = document.getElementById("thirdinput")
	var fourthInput = document.getElementById("fourthinput")
	var fifthInput = document.getElementById("fifthinput")
	var textInput = document.getElementById("textinput")
	
	if(fifthInput.checked == true && isEmpty(textInput.value) == true) {
				alert("Please enter a food name.");
	}
	if(firstInput.checked == false && secondInput.checked == false && thirdInput.checked == false && fourthInput.checked == false && fifthInput.checked == false){
		alert("Please make a selection.");
	}
	
	if (fifthInput.checked == false && isEmpty(textInput.value) == false) {
		alert("Please remove the text option.");
	}

});


