function myFunction() {
    document.getElementById("Shirt"). src = "Shirt(Blue).png";
	}
	function myFunction2() {
    document.getElementById("Shirt"). src = "Shirt(Green).png";
	}
	function myFunction3() {
    document.getElementById("Shirt"). src = "Shirt(Purple).png";
	

}


var c = document.getElementById("Canvasforshirt");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(310, 199);
ctx.stroke();


function myFunction4() {
    document.getElementById("Trouser"). src = "Trouser(Blue).png";
	}
	function myFunction5() {
    document.getElementById("Trouser"). src = "Trouser(Green).png";
	}
	function myFunction6() {
    document.getElementById("Trouser"). src = "Trouser(Brown).png";

}


var c = document.getElementById("Canvasfortrousers");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(310, 199);
ctx.stroke();

{

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
