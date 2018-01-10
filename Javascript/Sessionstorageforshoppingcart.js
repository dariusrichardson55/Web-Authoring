window.onload=function() {
if (sessionStorage.getItem("sessionStorage") != "On") {

	sessionStorage.setItem("Shirt","0");
	sessionStorage.setItem("Trousers","0");
    sessionStorage.setItem("Hat","0");
    
}

sessionStorage.setItem("sessionStorage","On");

function basketUpdate(){
	var BasketCount = parseInt(sessionStorage.getItem("Shirt")) +
	parseInt(sessionStorage.getItem("Trousers"))+
	parseInt(sessionStorage.getItem("Hat")) ;
	
		
		}
	
	

document.getElementById("Deliveryterritory").addEventListener("click", function(){

	var CurrentCount = parseInt(sessionStorage.getItem("Shirt")) + 1;
	sessionStorage.setItem("Shirt",CurrentCount.toString());
	basketUpdate();
	alert("Product is added to your basket");
	console.log("Shirt added to basket");
});


document.getElementById("Deliveryterritory2").addEventListener("click", function(){
	
	var CurrentCount = parseInt(sessionStorage.getItem("Trousers")) + 1;
	sessionStorage.setItem("Trousers",CurrentCount.toString());
	basketUpdate();
	alert("Product is added to your basket");
    console.log("trousers added to basket");
  
});

document.getElementById("Deliveryterritory3").addEventListener("click", function(){
	
	var CurrentCount = parseInt(sessionStorage.getItem("Hat")) + 1;
	sessionStorage.setItem("Hat",CurrentCount.toString());
	basketUpdate();
	alert("Product is added to your basket");
    console.log("Hat added to basket");
});

}
	



