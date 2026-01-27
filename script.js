const albumContainer = document.getElementById("image-container");
const dialog = document.getElementById("fs_dialog");
const h1 = document.getElementById("h1"); // h1 Title "Albums"

let userCurrentlyinAlbum = 0;
let album_list = [
    { title: "Animals", src: "./img/albumCover/1.png", clickFunction: "loadAlbum(1)", alt: "Animals Album Cover" },
    { title: "Cars", src: "./img/albumCover/2.png", clickFunction: "loadAlbum(2)", alt: "Cars Album Cover" },
]

function init() {
    dialog.innerHTML = `<button
                            src="./assets/svg/Back_Arrow.svg"
                            alt="Zurück zum Album"
                            class="back_dialog"
                            onclick="closeDialog()">
                        </button>
                        <div class="angle">
                            <button class="lastimagebutton" alt="letztes Bild" onclick="lastImage()"></button>
                            <button class="nextimagebutton" alt="nächstes Bild" onclick="nextImage()"/></button>
                        </div>`
    // Albums laden
    albumContainer.innerHTML = ""; // div "image-container" zurücksetzen
    if (albumContainer.classList.contains("grid-repeat5")) {
        albumContainer.classList.remove("grid-repeat5")
    }
    albumContainer.classList.add("grid-repeat2")
    h1.innerHTML = "Albums";
    for (let { title, src, clickFunction, alt } of album_list) {
        albumContainer.innerHTML += `
            <div class="gallery-img">
            <img src="${src}" onclick="${clickFunction}" alt="${alt}">
            <h2 class="white t-alig-center pad-top-12">${title}</h2>
            </div>
        `;
    }
}
