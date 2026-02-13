let album_list = [
    {
        title: "Animals",
        src: "./img/albumCover/1.png",
        clickFunction: "loadAlbum(1)",
        alt: "Animals Album Cover"
    },
    {
        title: "Cars",
        src: "./img/albumCover/2.png",
        clickFunction: "loadAlbum(2)",
        alt: "Cars Album Cover"
    }
];
let albumContainer = document.getElementById("image-container");
let dialog = document.getElementById("fs_dialog");
let h1 = document.getElementById("h1");
let userCurrentlyinAlbum = 0;

function getDialogInnerHTML() {
    return `<button
                            type="button"
                            aria-label="Zurück zum Album"
                            class="back_dialog"
                            onclick="closeDialog()">
                        </button>
                        <div class="angle">
                            <button type="button" class="lastimagebutton" aria-label="letztes Bild" onclick="lastImage()"></button>
                            <button type="button" class="nextimagebutton" aria-label="nächstes Bild" onclick="nextImage()"></button>
                        </div>`;
}

function setPhotoOverviewCssGrid() {
    if (albumContainer.classList.contains("grid-repeat2")) {
        albumContainer.classList.remove("grid-repeat2");
    }
    albumContainer.classList.add("grid-repeat5");
}

function setAlbumOverviewCssGrid() {
    if (albumContainer.classList.contains("grid-repeat5")) {
        albumContainer.classList.remove("grid-repeat5");
    }
    albumContainer.classList.add("grid-repeat2");
}

function init() {
    setAlbumOverviewCssGrid();
    h1.innerHTML = "Albums";
    albumContainer.innerHTML = "";
    dialog.innerHTML = getDialogInnerHTML();
    loadAlbumPreview();
}

function getAlbumContainerHTML(src, clickFunction, alt, title) {
    return `
        <div class="gallery-img">
            <button type="button" class="gallery-button" onclick="${clickFunction}">
                <img src="${src}" alt="${alt}">
            </button>
            <h2 class="white t-alig-center pad-top-12">${title}</h2>
        </div>
    `;
}

function loadAlbumPreview() {
    for (let i = 0; i < album_list.length; i++) {
        let album_item = album_list[i];
        albumContainer.innerHTML += getAlbumContainerHTML(album_item.src, album_item.clickFunction, album_item.alt, album_item.title);
    }
}
