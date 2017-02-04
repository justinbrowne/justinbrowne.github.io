var cardForm = document.getElementById("cardform");


cardForm.addEventListener("submit", function (event) {
	event.preventDefault();
	var cardNumber = document.getElementById("cardnumber")
	var cardName = document.getElementById("cardname")
	
	
	if(isEmpty(cardName.value)) {
		alert("Enter the name on your card.");
	}
	
	if(isCreditCard(cardNumber.value)) {
	}
	else {
	alert("Enter a valid Credit Card number.");
	}
});

