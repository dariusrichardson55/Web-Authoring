window.onload=function() {

///  Session storage for womens clothes

if (sessionStorage.getItem("sessionStorage") != "On") {

	 sessionStorage.setItem("Kidshirts","0");
	 sessionStorage.setItem("Womentrousers","0");
}

sessionStorage.setItem("sessionStorage","On");

function basketUpdate(){
	
	parseInt(sessionStorage.getItem("Kidshirts"));
	parseInt(sessionStorage.getItem("Womentrousers"));
		
		}
	

document.getElementById("Deliveryterritory5").addEventListener("click", function(){
	
	var CurrentCount = parseInt(sessionStorage.getItem("Kidshirts")) + 1;
	sessionStorage.setItem("Kidshirts",CurrentCount.toString());
	basketUpdate();
	alert("Product is added to your basket");
    console.log("Women's shirt added to basket");
});

}