let sw = null;

function notification() {
    const options = {
        body: "Testing Our Notification",
        icon: "assets/img/logo.png"
    };

    new Notification("Hi there!!", options);
}

function displayNotification() {
    if (window.Notification && Notification.permission === "granted") {
        notification();
    } else if (window.Notification && Notification.permission !== "denied") {
        Notification.requestPermission(status => {
            if (status === "granted") {
                notification();
            } else {
                alert("You denied or dismissed permissions to notifications.");
            }
        });
    } else {
        alert(
            "You denied permissions to notifications. Please go to your browser or phone setting to allow notifications."
        );
    }
}



if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("service-worker.js")
        .then(function(registration) {
            sw = registration;
            console.log("Service Worker registered with scope:",
                registration.scope);


        }).catch(function(err) {
            alert('Service Worker registration Failed, Please Check Console for detail information');
            console.log("Service worker registration failed:", err);
        });
}

if ('PushManager' in window) {
    console.log('Service Workers Push Notification is supported');
} else {
    // alert('Sorry, Push notification isn\'t supported in your browser.');
    console.log('Sorry, Push notification isn\'t supported in your browser.');
}



if (Notification.permission === 'denied') {
    alert('User has blocked push notification.');
}

/* GIO LOCATION*/

if ('geolocation' in navigator) {

    // navigator.geolocation.getCurrentPosition(function (location) {
    //     appendLocation(location, 'fetched');
    // });
    // watchId = navigator.geolocation.watchPosition(appendLocation);
    getLocation();
    console.log('Geolocation API supported');
} else {
    alert('Sorry, Geolocation API isn\'t supported in your browser.');
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setCurrentPosition, positionError, { enableHighAccuracy: false, timeout: 15000, maximumAge: 0 });
    }
}

function setCurrentPosition(position) {
    // document.querySelector('.accuracy').innerHTML = position.coords.accuracy;
    // document.querySelector('.altitude').innerHTML = position.coords.altitude;
    // document.querySelector('.altitudeAccuracy').innerHTML = position.coords.altitudeAccuracy;
    // document.querySelector('.heading').innerHTML = position.coords.heading;
    // document.querySelector('.latitude').innerHTML = position.coords.latitude;
    // document.querySelector('.longitude').innerHTML = position.coords.longitude;
    // document.querySelector('.speed').innerHTML = position.coords.speed;
    console.log('accuracy' + position.coords.accuracy);
    console.log('altitude' + position.coords.altitude);
    console.log('altitudeAccuracy' + position.coords.altitudeAccuracy);
    console.log('heading' + position.coords.heading);
    console.log('latitude' + position.coords.latitude);
    console.log('longitude' + position.coords.longitude);
    console.log('speed' + position.coords.speed);
    // alert('longitude' + position.coords.longitude);
}

function positionError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.error("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.error("An unknown error occurred.");
            break;
    }
}

function locationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            return "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            return "Location information is unavailable."
            break;
        case error.TIMEOUT:
            return "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            return "An unknown error occurred."
            break;
    }
}

var geoWatch;

function startWatch() {
    if (!geoWatch) {
        if ("geolocation" in navigator && "watchPosition" in navigator.geolocation) {
            geoWatch = navigator.geolocation.watchPosition(setCurrentPosition, positionError, { enableHighAccuracy: false, timeout: 15000, maximumAge: 0 });
        }
    }
}

function stopWatch() {
    navigator.geolocation.clearWatch(geoWatch);
    geoWatch = undefined;
}

//function that gets the location and returns it
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         console.log("Geo Location not supported by browser");
//     }
// }
//function that retrieves the position
// function showPosition(position) {
//     var location = {
//         longitude: position.coords.longitude,
//         latitude: position.coords.latitude
//     }
//     alert(location);
//     console.log('location');
//     console.log(location);
// }
//request for location
// getLocation();

// function showInMap(pos) {
//     var latlon = pos.coords.latitude + "," + pos.coords.longitude;

//     var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
//     "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_:KEY";
//     var map = document.querySelector("mapholder");
//     map.innerHTML = "<img src='"+img_url+"'>";
// }

/* GIO LOCATION*/

// if ('Notification' in window) {
//     Notification.requestPermission(result => {
//         if (result === 'granted') {
//             console.log('Notification Acess granted! :)')
//             navigator.serviceWorker.ready.then(registration => {
//                 registration.showNotification('Vibration Sample', {
//                     body: 'Buzz! Buzz!',
//                     tag: 'vibration-sample'
//                 });
//             });
//         } else if (result === 'denied') {
//             console.log('Notification Access denied :(')
//         } else {
//             console.log('Notification Request ignored :/')
//         }
//     })
// }