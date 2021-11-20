const firebaseConfig = {
  apiKey: "AIzaSyA6vfS8YgeJn2JXvx4a-Jotw74qszyEfng",
  authDomain: "kwitter-scuffed.firebaseapp.com",
  databaseURL: "https://kwitter-scuffed-default-rtdb.firebaseio.com",
  projectId: "kwitter-scuffed",
  storageBucket: "kwitter-scuffed.appspot.com",
  messagingSenderId: "142721295369",
  appId: "1:142721295369:web:f50da947f1d40c2ce304d8",
  measurementId: "G-6TR6TK67SQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "....!";

  function add_room(){
    roomname = document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update({
      purpose: "adding room name"
    });
  
    localStorage.setItem("room name",roomname);
    

   
  };

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;      
       Room_names = childKey;
       console.log("room name" + Room_names);
       row = "<div class='room_name' id= " + Room_names + " onclick = 'redirectToRoomname(this.id)'># " + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;

   });});}
   getData();


  function redirectToRoomname(name){  
    console.log(name);
    localStorage.getItem("roomname",name);
    window.location = "kwitter_page.html";
  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
  }
