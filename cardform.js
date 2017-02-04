var cardForm = document.getElementById("cardform");
var errorMessageName = cardForm.firstChild.nextSibling.firstChild.nextSibling;
var errorMessageCC = cardForm.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;

cardForm.addEventListener("submit", function (event) {
	event.preventDefault();
	var cardNumber = document.getElementById("cardnumber")
	var cardName = document.getElementById("cardname")
	
	
	if(isEmpty(cardName.value)) {
		alert("Enter the name on your card.");
		errorMessageName.classList.add("oops");
	} else {
		
	}
	
	if(isCreditCard(cardNumber.value)) {
	}
	else {
	alert("Enter a valid Credit Card number.");
	errorMessageCC.classList.add("oops");
	}
});

