// Init GMaps

function initialize() {
	var myLoc = new google.maps.LatLng(49.260, -123.172);
	var mapOptions = {
		center: myLoc,
		zoom: 17,
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	// Init GMaps var
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	// Marker Graphics
	var currLocImage = './images/curr-location-marker.svg'; // Current location marker icon
	var redMarkerImage = './images/icons/map-marker-red.svg';
	var greenMarkerImage = './images/icons/map-marker-green.svg';
	var blueMarkerImage = './images/icons/map-marker-blue.svg';
	
	// Incident Array
	var inArray = [
					['911 Assistance', redMarkerImage, 'Seth Williams', 49.260411, -123.172102],
					['Status Update', greenMarkerImage, 'James Wilson', 49.26086, -123.17205],
					['Status Update', greenMarkerImage, 'Kayla Taylor', 49.26034, -123.17049],
					['Status Update', greenMarkerImage, 'Janice Wong', 49.25949, -123.17206],
					['Status Update', greenMarkerImage, 'Rosa Sanchez', 49.25975, -123.17397],
					['Status Update', greenMarkerImage, 'Pradeep Akula', 49.26038, -123.17390]
				  ];
	
	// Place markers from Incident Array
	for (var i in inArray) {
		console.log(inArray[i][1]);
		inMarker = new google.maps.Marker({
			position: new google.maps.LatLng(inArray[i][3], inArray[i][4]),
			map: map,
			icon: inArray[i][1],
			title: inArray[i][0]
		});
	};
	
	// Curr Position Marker
	var currPosMarker = new google.maps.Marker({
		position: myLoc,
		map: map,
		icon: currLocImage,
		title: 'Current Location'
	});
}
$(document).ready(function() {
	// Enable the visual refresh
	google.maps.visualRefresh = true;
	google.maps.event.addDomListener(window, 'load', initialize);
	
	// Enable sidr menu
	$('#open-menu').sidr({
		name: 'nav-menu',
		side: 'right',
		source: '#nav-panel'
	});
});