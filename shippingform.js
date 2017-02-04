var shippingForm = document.getElementById("shippingform");



shippingForm.addEventListener("submit", function (event) {
	event.preventDefault();
	var checkedBox = document.getElementById("checkbox").checked;
	var billingFirst = document.getElementById("firstbilling")
	var billingLast = document.getElementById("lastbilling")
	var billingAddress = document.getElementById("addressbilling")
	var billingCity = document.getElementById("citybilling")
	var billingCountry = document.getElementById("countrybilling")
	
	var shippingFirst = document.getElementById("firstshipping")
	var shippingLast = document.getElementById("lastshipping")
	var shippingAddress = document.getElementById("addressshipping")
	var shippingCity = document.getElementById("cityshipping")
	var shippingCountry = document.getElementById("countryshipping")	
	
	// check billing fields
	if(isEmpty(billingFirst.value)) {
		alert("Please enter your billing first name.");
	}
	else if(isEmpty(billingLast.value)) {
		alert("Please enter your billing last name.");
	}
	else if(isEmpty(billingAddress.value)) {
		alert("Please enter your billing address.");
	}
	else if(isEmpty(billingCity.value)) {
		alert("Please enter your billing city.");
	}
	else if(isEmpty(billingCountry.value)) {
		alert("Please enter your billing country.");
	}


	//check shipping fields
	if(checkedBox == true) {
	}
	else if(isEmpty(shippingFirst.value)) {
		alert("Please enter your shipping first name.");
	}
	else if(isEmpty(shippingLast.value)) {
		alert("Please enter your shipping last name.");
	}
	else if(isEmpty(shippingAddress.value)) {
		alert("Please enter your shipping address.");
	}
	else if(isEmpty(shippingCity.value)) {
		alert("Please enter your shipping city.");
	}
	else if(isEmpty(shippingCountry.value)) {
		alert("Please enter your shipping country.");
	}
});

