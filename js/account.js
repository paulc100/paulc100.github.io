// AUTHENTICATION

function adduser(){
    var email= document.getElementById("email2").value;
    var password = document.getElementById("password2").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
        alert("Signed in!");
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
    });
}
function signIn(){
    var email= document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        alert("Signed in!");
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
    });
}
function signOut(){
    var admin = document.getElementById("admin_button");

    firebase.auth().signOut().then(function() {
        alert("Signed out!");
        if (admin){
            admin.parentNode.removeChild(admin);
        }
    }).catch(function(error) {
        // An error happened.
    });
}