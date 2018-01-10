window.onload=function() {
if (sessionStorage.getItem("sessionStorage") != "On") {

	sessionStorage.setItem("Shirt","0");
	sessionStorage.setItem("Trousers","0");
    sessionStorage.setItem("Hat","0");
    sessionStorage.setItem("Womenshirts","0");
    sessionStorage.setItem("Womentrousers","0");
    sessionStorage.setItem("Kidshirts","0");
}

sessionStorage.setItem("sessionStorage","On");

function basketUpdate(){
	var BasketCount = parseInt(sessionStorage.getItem("Shirt")) +
	parseInt(sessionStorage.getItem("Trousers"))+
	parseInt(sessionStorage.getItem("Hat")) +
	parseInt(sessionStorage.getItem("Womenshirts")) +
	parseInt(sessionStorage.getItem("Womentrousers")) +
	parseInt(sessionStorage.getItem("Kidshirts"));

	document.getElementById("basket").innerHTML = "Number of products in basket: " + BasketCount + "";
		
		}
	

		document.getElementById("NumberofShirts").innerHTML = sessionStorage.getItem("Shirt");
		document.getElementById("Numberoftrousers").innerHTML = sessionStorage.getItem("Trousers");
		document.getElementById("NumberofHats").innerHTML = sessionStorage.getItem("Hat");
		document.getElementById("NumberofWomenshirts").innerHTML = sessionStorage.getItem("Womenshirts");
		document.getElementById("NumberofWomentrousers").innerHTML = sessionStorage.getItem("Womentrousers");
		document.getElementById("NumberofKidsshirts").innerHTML = sessionStorage.getItem("Kidshirts");
			
		
		var Shirtcost = parseInt(sessionStorage.getItem("Shirt"))*12;
		var Trouserscost = parseInt(sessionStorage.getItem("Trousers"))*15;
		var Hatcost = parseInt(sessionStorage.getItem("Hat"))*10;
		var Womenshirtcost = parseInt(sessionStorage.getItem("Womenshirts"))*11;
		var Womenstrouserscost = parseInt(sessionStorage.getItem("Womentrousers"))*15;
		var Kidsshirtcost = parseInt(sessionStorage.getItem("Kidshirts"))*9;
		
		 TotalCost = Shirtcost + Trouserscost + Hatcost + Womenshirtcost + Womenstrouserscost + Kidsshirtcost;

		document.getElementById("TotalCost").innerHTML = "Subtotal: £" + TotalCost;



}