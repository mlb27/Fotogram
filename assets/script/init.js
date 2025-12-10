const albumContainer = document.getElementById("image-container");
const h1 = document.getElementById("h1");

let album_list = [
    { title: "Animals", src: "./img/albumCover/1.png", clickFunction: "loadAlbum(1)" },
    { title: "Cars", src: "./img/albumCover/2.png", clickFunction: "loadAlbum(2)" },
]

function loadAlbums() {
    albumContainer.innerHTML = "";
    h1.innerHTML = "Albums";

    for (let { title, src, clickFunction } of album_list) {
        albumContainer.innerHTML += `
            <div class="gallery-img">
            <img src="${src}" onclick="${clickFunction}" alt="${title}">
            <h2 class="white t-alig-center">${title}</h2>
            </div>
        `;
    }
}
