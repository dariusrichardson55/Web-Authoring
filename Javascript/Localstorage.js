window.onload=function(){

// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
	localStorage.setItem("firstname", " Created by Darius");
    localStorage.setItem("lastname", "Richardson");
    // Retrieve
    document.getElementById("resultfirstname").innerHTML = localStorage.getItem("firstname");
	 document.getElementById("resultsecondname").innerHTML = localStorage.getItem("lastname");
	
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

}
