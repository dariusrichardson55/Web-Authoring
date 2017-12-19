window.onload=function(){



// Locate You using Longitude and Latitude

            if (navigator.geolocation)
            {
                navigator.geolocation.getCurrentPosition(showCurrentLocation);
            }
            else
            {
               alert("Geolocation API not supported.");
            }

            function showCurrentLocation(position)
            {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                var coords = new google.maps.LatLng(latitude, longitude);

                var mapOptions = {
                zoom: 15,
                center: coords,
                mapTypeControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            //create the map, and place it in the HTML map div
            
		
            map = new google.maps.Map(
            document.getElementById("mapPlaceholder"), mapOptions
						
            );

		           

            //place the initial marker
            var marker = new google.maps.Marker({
            position: coords,
            map: map,
            title: "Current location!"
            });
            }
       
   	

	}

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

