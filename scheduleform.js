var schedulingForm = document.getElementById("schedulingform");


schedulingForm.addEventListener("submit", function (event) {
	event.preventDefault();
	var scheduleDate = document.getElementById("date")
	var scheduleTime = document.getElementById("time")
	var scheduleMessage = document.getElementById("textbox")
	
	if(isEmpty(scheduleDate.value)) {
		alert("Please enter the date.");
	}
	if (isEmpty(scheduleTime.value)){
		alert("Please enter the time.");
	}
	if (isEmpty(scheduleMessage.value)){
		alert("Please enter a message.");
	}
});


