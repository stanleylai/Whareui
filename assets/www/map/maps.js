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
	var currLocImage = '../images/curr-location-marker.svg'; // Current location marker icon
	var redMarkerImage = '../images/icons/map-marker-red.svg';
	var greenMarkerImage = '../images/icons/map-marker-green.svg';
	var blueMarkerImage = '../images/icons/map-marker-blue.svg';
	
	// Incident Array
	var inArray = [
					['help', redMarkerImage, 'Seth Williams', '../images/profile/seth.jpg', '../community/seth-williams.html', "The wall outside our room has caved, and we are trapped in here!", 49.261411, -123.173102],
					['update', greenMarkerImage, 'James Wilson', '../images/profile/james.jpg', '../community/james-wilson.html', 'Watch out everyone, a tree has blocked this road', 49.26086, -123.17205],
					['update', greenMarkerImage, 'Kayla Taylor', '../images/profile/kayla.jpg', '../community/kayla-taylor.html', 'Going to drive down to the store for stuff. Anyone needs a lift?', 49.26034, -123.17049],
					['update', greenMarkerImage, 'Janice Wong', '../images/profile/piper.jpg', '../community/janice-wong.html', "At least this means I can miss work tomorrow?", 49.25949, -123.17206],
					['update', greenMarkerImage, 'Rosa Sanchez', '../images/profile/rosa.png', '../community/rosa-sanchez.html', 'Just realized I forgot to pack a can opener in my kit. Anyone has an extra?', 49.25975, -123.17397],
					['update', greenMarkerImage, 'Pradeep Akula', '../images/profile/pradeep.jpg', '../community/pradeep-akula.html', 'I have an extra sleeping bag, if anyone needs one!', 49.26038, -123.17390]
				  ];
	
	// Array to hold list of marker and info window items
	var markerArray = [];
	var infoWindowArray = [];
	
	// Place markers from Incident Array
	for (var i in inArray) {
		// Create Marker
		var inMarker = new google.maps.Marker({
			position: new google.maps.LatLng(inArray[i][6], inArray[i][7]),
			map: map,
			icon: inArray[i][1],
			title: inArray[i][2]
		});
		
		markerArray.push(inMarker);
		
		// Define Info Window contents
		var contentString = '<a href="'+inArray[i][4]+'">'+
							'<div class="marker-content">'+
								'<img class="profile" src="'+inArray[i][3]+'">'+
								'<div class="new-marker '+inArray[i][0]+'">'+inArray[i][0]+'</div>'+
								'<h1 class="name">'+inArray[i][2]+'</h1>'+
								'<p>'+inArray[i][5]+'</p>'+
							'</div>'+
							'</a>';
		
		// Create Info Window + Assign Content
		var infoWindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 350
		});
		
		infoWindowArray.push(infoWindow);
	};
	
	// Event Handler for each marker
	google.maps.event.addListener(markerArray[0], 'click', function() { infoWindowArray[0].open(map, markerArray[0]); });
	google.maps.event.addListener(markerArray[1], 'click', function() { infoWindowArray[1].open(map, markerArray[1]); });
	google.maps.event.addListener(markerArray[2], 'click', function() { infoWindowArray[2].open(map, markerArray[2]); });
	google.maps.event.addListener(markerArray[3], 'click', function() { infoWindowArray[3].open(map, markerArray[3]); });
	google.maps.event.addListener(markerArray[4], 'click', function() { infoWindowArray[4].open(map, markerArray[4]); });
	google.maps.event.addListener(markerArray[5], 'click', function() { infoWindowArray[5].open(map, markerArray[5]); });
	
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