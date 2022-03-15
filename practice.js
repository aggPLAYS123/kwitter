
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAz4od71QVw7-8r80MAK4zvl-SAfUtFSaE",
    authDomain: "kwitter-5dfb3.firebaseapp.com",
    databaseURL: "https://kwitter-5dfb3-default-rtdb.firebaseio.com",
    projectId: "kwitter-5dfb3",
    storageBucket: "kwitter-5dfb3.appspot.com",
    messagingSenderId: "64077245509",
    appId: "1:64077245509:web:5636338e18803eb474072c"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   function adduser(){
       user_name=document.getElementById("user_name").value;
       firebase.database().ref("/").child(user_name).update({
           purpose:"adding user"
       })
   }