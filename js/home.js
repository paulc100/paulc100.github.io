firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        //alert(user.email);
        var home = document.getElementById("newuser");
        home.parentNode.removeChild(home);
        console.log(user.toJSON());
    } else {
        // No user is signed in.
    }
});