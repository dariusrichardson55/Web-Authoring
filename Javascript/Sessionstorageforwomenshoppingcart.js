window.onload=function() {

///  Session storage for womens clothes

if (sessionStorage.getItem("sessionStorage") != "On") {

	 sessionStorage.setItem("Womenshirts","0");
	 sessionStorage.setItem("Womentrousers","0");
}

sessionStorage.setItem("sessionStorage","On");

function basketUpdate(){
	
	parseInt(sessionStorage.getItem("Womenshirts"));
	parseInt(sessionStorage.getItem("Womentrousers"));
		
		}
	

document.getElementById("Deliveryterritory4").addEventListener("click", function(){
	
	var CurrentCount = parseInt(sessionStorage.getItem("Womenshirts")) + 1;
	sessionStorage.setItem("Womenshirts",CurrentCount.toString());
	basketUpdate();
	alert("Product is added to your basket");
    console.log("Women's shirt added to basket");
});

document.getElementById("Deliveryterritory5").addEventListener("click", function(){
	
	var CurrentCount = parseInt(sessionStorage.getItem("Womentrousers")) + 1;
	sessionStorage.setItem("Womentrousers",CurrentCount.toString());
	basketUpdate();
	alert("Product is added to your basket");
    console.log("Women's trousers added to basket");
});

}