var loginForm = document.getElementById("loginform");


loginForm.addEventListener("submit", function (event) {
	event.preventDefault();
	var emailAddress = document.getElementById("emailaddress")
	var pass_word = document.getElementById("password")
	var pinNumber = document.getElementById("pin")
	
	
	if(isEmpty(emailAddress.value)) {
		alert("Enter your email address.");
	}
	
	if(isEmailValid(emailAddress.value)) {
	}
	else {
		alert("Please enter a valid email address.")
	}
	
	if(isEmpty(pass_word.value)) {
		alert("Enter your password.");
	}	
	
	if(isEmpty(pinNumber.value)) {
		alert("Enter your pin.");
	}

});


