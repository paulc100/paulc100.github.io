//ADD GAMES

function addData(){
    var gamedisplay = document.getElementById('games');
    var db = firebase.firestore();

    //alert("adding data");
    var game_name = document.getElementById("pname").value;
    var game_desc = document.getElementById("desc").value;
    var game_image = document.getElementById("image").value;
    var game_link = document.getElementById("link").value;
    var game_creator = document.getElementById("creator").value;

    var submitted = document.getElementById("gamestatus");
    var form = document.getElementById("gameform");

    db.collection("Games").add({
        gamename: game_name,
        gamedesc: game_desc,
        gameimage: game_image,
        gamelink: game_link,
        gamecreator: game_creator,
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            //alert("Added");
            //update the products view
            //getGames();
            form.reset();
            submitted.innerHTML = "Game Added Successfully..."
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            submitted.innerHTML = "Error Adding Game..."
        });
}

function addAdmin(){
    var db = firebase.firestore();

    //alert("adding data");
    var admin_name = document.getElementById("aname").value;
    var admin_email = document.getElementById("aemail").value;

    var submitted = document.getElementById("adminstatus");
    var form = document.getElementById("adminform");

    db.collection("Admins").add({
        adminname: admin_name,
        adminemail: admin_email,
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            //alert("Added");
            //update the products view
            form.reset();
            submitted.innerHTML = "Admin Added Successfully..."
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            submitted.innerHTML = "Error Adding Admin..."
        });
}