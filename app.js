// Import the funct
import { getFirestore, addDoc, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBHDPZGD8xnTFrSraw17aSeFj2sjj9a6CA",
   authDomain: "autenhtiform.firebaseapp.com",
   databaseURL: "https://autenhtiform-default-rtdb.firebaseio.com",
   projectId: "autenhtiform",
   storageBucket: "autenhtiform.appspot.com",
   messagingSenderId: "292404746046",
   appId: "1:292404746046:web:9a76b9b72fffe93eb7fe6f"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
 
 const db =  getFirestore(app);
 // const auth = getAuth();
 var sighUp = document.getElementById('sighUp');
var buconnex = document.getElementById('buconnex');


//  page de connexction

    buconnex.addEventListener('click', (e)=>{


      var inpemail = document.getElementById('inpemail').value;
      var inpassword = document.getElementById('inpassword').value;
      const condi = query(collection(db, "users"), where("email", "==", inpemail));
  
          
     var users ;
          getDocs(condi).then(docSnap => {
              docSnap.forEach((doc)=> {
                  users= doc.data();
              });
              

              if (typeof users !== 'undefined') {
                  if (users.status ==="admin") {
              document.getElementById('inpemail').value ="";
              document.getElementById('inpassword').value="";
              window.location="admin.html"
              alert('vous etes admin')
                  
         
        }else if (users.status ==="guest") {
                document.getElementById('inpemail').value ="";
                document.getElementById('inpassword').value="";
                window.location="guest.html"
                alert('vous etes visiteur')
            
        }else if 
           (users.status ==="utilisateur") {
              document.getElementById('inpemail').value ="";
              document.getElementById('inpassword').value="";
              window.location="utilisateur.html"
              alert('vous etes utilisateur')
      
        }else{
        alert('metter les identifient')
        }
              }else{
                  alert('not possible ')
              }
              console.log( users.status);
          });
      });  






//  ========page d'inscription=====//

 sighUp.addEventListener('click', (e) => {

   var prenom = document.getElementById('prenom').value;
   var nom = document.getElementById('nom').value;
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;
   var select = document.querySelector('select').value;

   alert('user created!');

   addDoc(collection(db, "users"), {
   nom: nom,
   prenom: prenom,
   email:  email,
   password: password,
   status: select,
});
 });


 

