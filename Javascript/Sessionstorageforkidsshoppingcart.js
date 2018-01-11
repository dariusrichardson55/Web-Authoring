window.onload=function() {

///  Session storage for womens clothes

if (sessionStorage.getItem("sessionStorage") != "On") {

	 sessionStorage.setItem("Kidshirts","0");
	 
}

sessionStorage.setItem("sessionStorage","On");

function basketUpdate(){
	
	parseInt(sessionStorage.getItem("Kidshirts"));

		
		}
	

document.getElementById("Deliveryterritory5").addEventListener("click", function(){
	
	var CurrentCount = parseInt(sessionStorage.getItem("Kidshirts")) + 1;
	sessionStorage.setItem("Kidshirts",CurrentCount.toString());
	basketUpdate();
	alert("Product is added to Delivery territory");
    console.log("Kid's shirt added to basket");
});

}