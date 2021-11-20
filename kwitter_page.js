
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

  user_name = localStorage.setItem("user_name");
  room_name = localStorage.setItem("room_name");

  function send(){
      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
          name: user_name,
          message: message,
          like:0
      });
      document.getElementById("message").value = "";
  }
  