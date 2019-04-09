var db = firebase.firestore();

var docRef = db.collection("Admins");
var adminsdata = [];

function authenticate(){
    firebase.auth().onAuthStateChanged(function(user) {
        var admin = document.getElementById("admin");
        if (user) {
            // User is signed in.
            if(adminsdata.includes(user.email)){
                //alert('Admin')
                admin.innerHTML += `<a id="admin_button" class="nav-link" href="admin.html">Admin Panel</a>`
            }
            else{
                //admin.parentNode.removeChild(admin);
                //alert(user.email);
                //alert('Not Admin');
            }
            console.log(user.toJSON());
        } else {
            // No user is signed in.
            //alert('No one logged in');
            //admin.parentNode.removeChild(admin);
        }
    });
}

function getAdmins(){
    db.collection("Admins").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var useradmin = doc.data().adminemail;
            adminsdata.push(useradmin);
        });
        //alert(adminsdata);
    });
}

function daynight(){
    var body = document.getElementById("body");
    var jumbo1 = document.getElementById("jumbo");
    if (jumbo1){
        if (body.className==='day'){
            body.className='night';
            jumbo1.className='jumbotron container bg-dark';
        }
        else if (body.className==='day2'){
            body.className='night2';
            jumbo1.className='jumbotron container bg-dark';
        }
        else if (body.className==='night'){
            body.className='day';
            jumbo1.className='jumbotron container bg-light';
        }
        else if (body.className==='night2'){
            body.className='day2';
            jumbo1.className='jumbotron container bg-light';
        }
    }
    else{
        if (body.className==='day'){
            body.className='night';
        }
        else if (body.className==='day2'){
            body.className='night2';
        }
        else if (body.className==='night'){
            body.className='day';
        }
        else if (body.className==='night2'){
            body.className='day2';
        }
    }
}

function removeElement() {
    var elem = document.getElementById("newuser");
    elem.parentNode.removeChild(elem);
}

getAdmins();
setTimeout(authenticate,1500);