// LOAD GAMES

function getGames() {
    var gamedisplay = document.getElementById('games');
    var db = firebase.firestore();

    gamedisplay.innerHTML = `<div class="text-center">
  <div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div><div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div><div class="spinner-grow text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>`;

    db.collection("Games").get().then((querySnapshot) => {
        //alert("Data Recieved");
        gamedisplay.innerHTML = "";
        querySnapshot.forEach((doc) => {
            gamedisplay.innerHTML += `<div class="single-blog-area blog-style-2 mb-50">
                <div class="row align-items-center">
                <div class="col-12 col-md-6">
                <div class="single-blog-thumbnail">
                <img class="round" src="images/Thumbnails1/${doc.data().gameimage}.jpg" width="80%" height="80%" alt="">
                </div>
                </div>
                <div class="col-12 col-md-6">
                <!-- Blog Content -->
            <div class="single-blog-content">
                <div class="line"></div>
                <h5 class="post-tag">Game</h5>
                <h4><a href="${doc.data().gamelink}" target="_blank" class="post-headline">${doc.data().gamename}</a></h4>
            <p>${doc.data().gamedesc}</p>
            <div class="post-meta">
                <p>By <a >${doc.data().gamecreator}</a></p>
            </div>
            </div>
            </div>
            </div>
            </div>
            <br>`
        });
    });
}

getGames();