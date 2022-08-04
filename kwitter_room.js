var firebaseConfig = {
      apiKey: "AIzaSyAukJR9SgIXM6q_4cGdWdB8XcZiR_UCjHg",
      authDomain: "kwitter-ced0c.firebaseapp.com",
      databaseURL: "https://kwitter-ced0c-default-rtdb.firebaseio.com",
      projectId: "kwitter-ced0c",
      storageBucket: "kwitter-ced0c.appspot.com",
      messagingSenderId: "304268854939",
      appId: "1:304268854939:web:22eabab6bb305add7fe83e"
};
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").Value;

      firebase.database().ref("/").child("room_name").update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}