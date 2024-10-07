let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let newItem = document.createElement("li");
	newItem.innerHTML = "Fourth element";
	let myList = document.getElementById("myList");
	myList.appendChild(newItem);
});
