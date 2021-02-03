
//ADD YOUR FIREBASE LINKS HERE // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDY0z1mMFIutfmqSQsljL-ZHJTvUClZCnc",
      authDomain: "signal-d35f1.firebaseapp.com",
      databaseURL: "https://signal-d35f1-default-rtdb.firebaseio.com",
      projectId: "signal-d35f1",
      storageBucket: "signal-d35f1.appspot.com",
      messagingSenderId: "452377844900",
      appId: "1:452377844900:web:b598d7e4d084151deb5a31"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
