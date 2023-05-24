


const defaultMarkers = [
  [{
    lat: 43.10377557077698,
    lng: -79.82782304699157
  }, 'Binbrook Conservation Area', '<h1> Binbrook Conservation Area</h1><p>Amazing experience in this smaller area. Lots of activities to do. No reservations for regular use. Small beach area. Nice hike around the lake. Lots of places to sit and settle.</p> <br><address>5050 Harrison Rd, Binbrook, ON L0R 1C0, Canada    </address>  <a href="https://canada247.info/explore/ontario/hamilton_division/hamilton/binbrook/binbrook-conservation-area-905-692-3228.html#:~:text=Binbrook%20Conservation%20Area%20is%20located%20in%20Hamilton%20Division,the%20place%2C%20the%20Phone%20number%20is%20%28905%29%20692-3228."> Read More</a>'],

  [{
    lat: 43.20677108961848,
    lng: -79.79217671081983
  }, 'Felker\'s Falls Conservation', '<h1>Felker\'s Falls Conservation</h1><p>Felker’s Falls Conservation Area is a beautiful spot just steps away from an urban environment.  This escarpment area is forested and features Felker’s Falls, a 20-metre ribbon waterfall, scenic vantage points and trails, including the Peter Street Trail, a wheelchair accessible loop trail which winds through the conservation area.    The waterfall is the highlight of this area, which also contains one of the few remaining woodlots on the Vinemount Moraine.  The broadleaf upland woods that grow along the escarpment slopes serve as a link between natural areas along the Niagara Escarpment Corridor.  The rock exposures located at Felker’s Falls have been identified as providing important geological information and of educational value.  Though the plunge pool at Felker’s is not as large as the one at the Devil’s Punch Bowl, it does provide an interesting look at the rock layers of this section of the Niagara Escarpment.</p><a href="https://ontarionaturetrails.com/trail/felkers-falls-conservation-area/"> Read More</a>'],

  [{
    lat: 43.208522770325956,
    lng: -79.71733234924133
  }, 'Dewitt Falls', '<h1>Dewitt Falls</h1> <p>Dewitt Falls is a Complex Ribbon Cascade measuring 9.8 metres (32 feet) in height and 2 metres (6 feet) in crest width. It experiences a powerful flow during peak storm events and the post-winter snow melt.</p> <br><address>237 Unity Side Rd E, Caledonia, ON N3W 2H7</address>  <a href="https://www.cityofwaterfalls.ca/dewitt-falls/"> Read More</a>'],

  [{
    lat: 43.27854876097383,
    lng: -79.96692799319945
  }, 'Dundas Peak', '<h1>Dundas Peak</h1>,<p>Dundas Peak is a beautiful lookout nestled in Hamilton’s Spencer Gorge Conservation Area. This viewpoint is now considered one of the most popular spots in Hamilton. From atop of this Niagara Escarpment section you can enjoy breathtaking views of the town of Dundas, the Dundas Valley as well as a glimpse of “The Hammer”.</p><a href="https://ivebeenbit.ca/hiking-hamilton-dundas-peak/"> Read More'],

  [{
    lat: 43.264550001906386,
    lng: -79.9971403831903
  }, 'McCormack Trail', '<h1>McCormack Trail</h1><p>Check out this 3.4-km loop trail near Hamilton, Ontario. Generally considered an easy route, it takes an average of 51 min to complete. This is a popular trail for birding, cross-country skiing, and hiking, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.</p><br>  <a href="https://www.alltrails.com/explore/trail/canada/ontario/mccormack-trail?mobileMap=false&ref=sidebar-static-map"> Read More</a>'],

  [{
    lat: 43.251798331259245,
    lng: -79.89517353356192
  }, 'Chedoke radial trail', '<h1>Chedoke radial trail</h1><p>Get to know this 9.5-km out-and-back trail near Hamilton, Ontario. Generally considered a moderately challenging route, it takes an average of 2 h 7 min to complete. This is a very popular area for birding, cross-country skiing, and mountain biking, so youll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.</p><br>  <a href="https://www.alltrails.com/explore/trail/canada/ontario/chedoke-radial-trail?mobileMap=false&ref=sidebar-static-map"> Read More</a>'],
  [{
    lat: 43.246539951395036,
    lng: -79.95885507667012
  }, 'Tiffany Falls Conservation Area ', '<h1> Tiffany Falls Conservation Area </h1>,<p>About Tiffany Falls Conservation Area Fees: Parking is $11.00; free with HCA Membership Pass. Tiffany Falls has a 1 hour time limit for parking. Tiffany Falls Conservation Area is considered a significant natural area.  Its bedrock exposures are considered an Earth Science Area of Regional Significance.  The central feature of the conservation area is the two waterfalls within it, Tiffany Falls and Washboard Falls, formed by Tiffany Creek.</p><address>900 Wilson St E, Hamilton, ON L8S 4K5</address><a href="https://conservationhamilton.ca/conservation-areas/tiffany-falls/"> Read More</a>'],

  [{
    lat: 43.16068443140433,
    lng: -80.12886142690859
  }, 'Twin Valley Nature Park ', '<h1>Twin Valley Nature Park </h1><p>Not available </p><address>84 Langford Church Rd, Brantford, ON N3T 5L4</address> <a href="https://twinvalleynaturepark.com/"> Read More</a>'],

  [{
    lat: 43.31225815834692,
    lng: -79.91256809830546
  }, 'Hamilton view', '<h1> Hamilton view </h1><p>Beautiful view, very serene. The highway can be a bit noisy sometimes but usually it\'s just some nice white noise. The Bruce Trail connects through here which makes for a nice hike as well.Great place to stop, sit, and have a coffee. </p><address>Bruce Trail, Dundas, ON L9H 5V5</address>'],

  [{
    lat: 43.108156571312556,
    lng: -79.91460400914707
  }, 'Killman Zoo', '<h1>Killman Zoo </h1> <p>1969, Murray Killman bought his first cat. Maggie the Cougar was Murray’s first feline love as he studied her to be able to paint her. As an artist this became one of Murray’s biggest passions and he collected more cougars through the 70’s. Then through the 80’s he expanded to acquire Candy the Jaguar along with Ocelot’s, Bobcats and the Canadian Lynx. Enclosures for the animals were built as needed and thus started the Killman’s Wildlife Sanctuary.</p> <br><address>237 Unity Side Rd E, Caledonia, ON N3W 2H7</address>  <a href="https://killmanzoo.com/killman-zoo/"> Read More</a>'],
  
];


var geocoder;
var map;
var address = "";
var currentAddressMarker = [];
const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";


var from = "Hamilton, Canada"
var to = "Dundas Peak, Canada"


function initMap() {
  var marks = [];
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {
      lat: 43.207466,
      lng: -79.883417
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
  // Set Latitude and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.






  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.


  defaultMarkers.forEach(([position, title, info], i) => {
    const marker = new google.maps.Marker({
      position, //the position is the object latitude and longatude
      map, //the object we are passing it to 
      title: `${info}`, //the title is the name 

      label: `${title}`,
      optimized: false,
    });

    marks.push(marker)
    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });

  });



//getting the current possition on the map 
function showPosition(position){
  

  
user_location = new google.maps.Marker({
  




  position: { 
    lat: position.coords.latitude, 


    lng: position.coords.longitude
  },

title:"current_location",

icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"


});
user_location.setMap(Map);


}

document.getElementById("current_location").onclick = function(){
 
  navigator.geolocation.getCurrentPosition(showPosition)


}

  





  addBtn = document.getElementById('add')
  addBtn.addEventListener("click", () => {

    defaultMarkers.forEach(([position, title, info], i) => {
      const marker = new google.maps.Marker({
        position, //the position is the object latitude and longitude
        map, //the object we are passing it to 
        title: `${info}`, //the title is the name 
  
        label: `${title}`,
        optimized: false,
      });
  
      marks.push(marker)



      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
  
    });
  });

  addBtn = document.getElementById('remove')

  addBtn.addEventListener("click", () => {
  
    for (var i = 0; i < marks.length; i++) {
      marks[i].setMap(null); //markerToBeRemoved.setMap(null);
    }
  });


















  //add marker on geoloction code

  geocoder = new google.maps.Geocoder();


  // add a click event handler to the map object
  google.maps.event.addListener(map, "click", function (event) {

    for (var i = 0; i < currentAddressMarker.length; i++) {
      currentAddressMarker[i].setMap(null); //markerToBeRemoved.setMap(null);
    }
    var pos = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    var marker = new google.maps.Marker({
      position: pos,
      map: map,
      title: 'Your position',
      icon: image
    });
    // map.setCenter(pos);

    currentAddressMarker.push(marker);

  });

  // add a marker based on the address
  addBtn = document.getElementById('addAddress')

  addBtn.addEventListener("click", () => {


    address = document.getElementById('address').value
    codeAddress(geocoder, map);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Your position',
          icon: image
        });
        map.setCenter(pos);
      }, function () {
        //handle location error (i.e. if user disallowed location access manually)
      });
    } else {
      // Browser doesn't support Geolocation
    }
  });

  //directions

  const directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();


  var select = document.getElementById("origin");


  for (var i = 0; i < defaultMarkers.length; i++) {
    var opt = defaultMarkers[i][1];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }

  document.getElementById('origin').onchange = function () {
    from = this.value
  }


  var select = document.getElementById("destinations");


  for (var i = 0; i < defaultMarkers.length; i++) {
    var opt = defaultMarkers[i][1];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }

  document.getElementById('destinations').onchange = function () {

    if (directionsDisplay != null) {
      directionsDisplay.setMap(null);
      directionsDisplay = null;
    }

    to = this.value

    directionsService.route({
        origin: from,
        destination: to,
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {

          directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            directions: response,
            map: map,
          });
        
          directionsDisplay.setOptions({
            polylineOptions: {
              strokeColor: 'red'
            }
          });
        }
      }
    )
  };
}

function codeAddress(geocoder, map) {
  geocoder.geocode({
    'address': address
  }, function (results, status) {
    if (status === 'OK') {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        icon: image
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

window.initMap = initMap;
