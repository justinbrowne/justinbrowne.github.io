var searchForm = document.getElementById("search");


searchForm.addEventListener("submit", function (event) {
	event.preventDefault();
	var searchField = document.getElementById("searchfield")	
	
	if(isEmpty(searchField.value)) {
		alert("Please enter a location in the search bar.");
	}
});

