// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyALeGW44MrQJOQhrSNS2ANWpBMJ1jj6JCk",
  authDomain: "csci225-eb.firebaseapp.com",
  projectId: "csci225-eb",
  storageBucket: "csci225-eb.appspot.com",
  messagingSenderId: "599518973937",
  appId: "1:599518973937:web:2aeb284889f7d5c543be50",
  measurementId: "G-DM3PB5G0PF"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
// document.querySelectorAll('li') ==> nodelist
// for loop to go through each nodelist
// and then get the text content

  $('li').each(function(){
    var value = $(this).text();
    console.log(value);

    firebase
    .firestore()
    .collection("mylist")
    .add({
      item: value//?
    });


  });

});
