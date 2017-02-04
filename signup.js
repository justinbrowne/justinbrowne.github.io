var signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function (event) {
	event.preventDefault();
	var firstName = document.getElementById("firstname")
	var lastName = document.getElementById("lastname")
	var emailAddress = document.getElementById("emailaddress")
	var birthDate = document.getElementById("birthdate")
	var pass_word = document.getElementById("password")
	
	if(isEmpty(firstName.value)) {
		alert("Please enter your first name.");
	}
	if(isEmpty(lastName.value)) {
		alert("Please enter your last name.");
	}
	if(isEmpty(emailAddress.value)) {
		alert("Please enter your email address.");
	}
	if(isEmpty(birthDate.value)) {
		alert("Please enter your birth date.");
	}
	if(isEmpty(pass_word.value)) {
		alert("Please enter a password.");
	}
});


