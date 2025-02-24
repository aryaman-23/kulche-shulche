"use strict";

// const tokenString = document.getElementById("token");

const config = {
    apiKey: "AIzaSyB9A8qGrIDT328e0OK5g3thSUF51Y7SRM4",
    authDomain: "kulcheshulche-92e55.firebaseapp.com",
    projectId: "kulcheshulche-92e55",
    storageBucket: "kulcheshulche-92e55.firebasestorage.app",
    messagingSenderId: "1088058662400",
    appId: "1:1088058662400:web:a03456a4fb41c6dc2902e5"
};
// Private Key : HQOIa7cUiutQUTGy984SbnUeQH5Oh70deEGkXx9T19Q
firebase.initializeApp(config);

const messaging = firebase.messaging();

// if ("serviceWorker" in navigator) {

//     // navigator.serviceWorker.register("firebase-messaging-sw.js", { scope: "firebase-cloud-messaging-push-scope" })
//     // console.log("[ServiceWorker**] - Registered");
//     navigator.serviceWorker.register("service-worker.js").then(swRegistered => {
//         console.log("[ServiceWorker**] - Registered");
//         sw = swRegistered;
//         displayNotification();

//         // document.querySelector("#share").addEventListener("click", onShare);
//     });
// }

messaging
    .requestPermission()
    .then(() => {
        console.log("Have Token Permission");
        return messaging.getToken();
    })
    .then(token => {
        // tokenString.innerHTML = "Token Is : " + token;
        console.log("Token Is : " + token);
        window.localStorage['KS_Web_Notification_token'] = token;
        // subscribeTokenToTopic(token, "allUsers");
    })
    .catch(err => {
        console.log("Unable to get permission to notify", err);
    });

messaging.onMessage(payload => {
    console.log("Message received. ", payload);
    const { title, ...options } = payload.notification;
});



// function toggleMenu() {
//     const navbar = document.getElementById("navbar");
//     if (navbar.className === "navbar") {
//         navbar.className += " responsive";
//     } else {
//         navbar.className = "navbar";
//     }
// }

// function subscribeTokenToTopic(token, topic) {
//     console.log(token);
//     fetch("https://iid.googleapis.com/iid/v1/" + token + "/rel/topics/" + topic, {
//             method: "POST",
//             headers: new Headers({
//                 Authorization: "key=AAAAaWAx_2Q:APA91bEz5F53ZIWPs70aQjdSflu-vKyVHMrOYvGe6jZEgc4QJtog-_k0iQpQtJX2lvcnd_SSnGTm8bI-PifpxQoe_VEo25j6Io4T1WILmY_F_93MSHJ9fYD5IYCHELym4SXOfeGsBM-n"
//             })
//         })
//         .then(response => {
//             if (response.status < 200 || response.status >= 400) {
//                 throw "Error subscribing to  the following topic: " +
//                     response.status +
//                     " - " +
//                     response.text();
//             } else {
//                 console.log('Successfully subscribed to "' + topic + '"');
//             }
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }

// function onShare() {
//     const title = document.title;
//     const url = document.querySelector("link[rel=canonical]") ?
//         document.querySelector("link[rel=canonical]").href :
//         document.location.href;
//     const text = "Learn how to use the share api";

//     if (navigator.share) {
//         navigator
//             .share({
//                 title,
//                 url,
//                 text
//             })
//             .then(() => {
//                 alert(`Thanks for Sharing!`);
//             })
//             .catch(err => {
//                 alert(`Couldn't share ${err}`);
//             });
//     } else {
//         alert(`Not supported !!`);
//     }
// }