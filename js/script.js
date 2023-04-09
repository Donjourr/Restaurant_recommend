/*! Test finished

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    var randomIndex = Math.floor(Math.random() * results.length);
    var randomRestaurant = results[randomIndex];
    var restaurantName = randomRestaurant.name;
    var restaurantAddress = randomRestaurant.formatted_address;
    var rating = randomRestaurant.rating;
    var photoUrl = randomRestaurant.photos ? randomRestaurant.photos[0].getUrl() : '';

    var resultWindow = window.open('result.html', '_blank');

    resultWindow.onload = function() {
      resultWindow.document.getElementById('result').innerHTML = '<strong>' + restaurantName + '</strong>' + ' (Rating: ' + rating + ')' + '<br>' + restaurantAddress + '<br>' + '<img src="' + photoUrl + '">';
    };

    if (marker) {
      marker.setMap(null);
    }

    marker = new google.maps.Marker({
      position: randomRestaurant.geometry.location,
      map: map,
      title: randomRestaurant.name
    });

    map.setCenter(randomRestaurant.geometry.location);
  }
}


*/