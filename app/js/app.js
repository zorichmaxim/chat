/**
 * Created by 123 on 20.10.2016.
 */
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAVRZoQTHLlbo8s6lt4D0wlEe6NUxyPeO0",
    authDomain: "chatzm-8dced.firebaseapp.com",
    databaseURL: "https://chatzm-8dced.firebaseio.com",
    storageBucket: "chatzm-8dced.appspot.com",
    messagingSenderId: "33702056053"
};
firebase.initializeApp(config);

angular.module('cbsChat', ['firebase']);