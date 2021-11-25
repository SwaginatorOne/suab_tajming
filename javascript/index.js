// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBD9sR8ZfyAnVDlklIlKF4HxiFnaPJYNt4",
    authDomain: "suab-tajming.firebaseapp.com",
    databaseURL: "https://suab-tajming-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "suab-tajming",
    storageBucket: "suab-tajming.appspot.com",
    messagingSenderId: "578231887707",
    appId: "1:578231887707:web:ace8390fe2908eed089c7e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Set database variable
let firebaseDatabase = firebase.database()

function addNewUser() {
    let name = document.getElementById('name').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let phonenumber = document.getElementById('phonenumber').value
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    firebaseDatabase.ref('users/' + username).set({
        name: name,
        lastname: lastname,
        email: email,
        phonenumber: phonenumber,
        username: username,
        password: password
    })
    alert('saved')
}

function get() {
    user_ref = firebaseDatabase.ref('users/' + 'hallå')
    user_ref.on('value', function(snapshot) {
        let data = snapshot.val()
        console.log("button clicked")
        alert(data.email)
    })
}

function login() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            alert("Välkommen Nettan")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Error : " + errorMessage);
        });


}

//Nu testar jag om det här fungerar