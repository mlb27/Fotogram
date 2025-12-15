let album_1 = [
    { title: "Maxi and Amy watching birds", src: "./img/cat/Maxi-und-Amy.jpeg" },
    { title: "Amy enjoying the view", src: "./img/cat/Amy.jpg" },
    { title: "Little Maxi and Amy sleeping peacefully", src: "./img/cat/Baby-Maxi-und-Amy.jpg" },
    { title: "Lilly exploring nature", src: "./img/cat/Lilly.jpeg" },
];
let album_2 = [
    { title: "BMW identifying as a bus", src: "./img/cars/bmw-1.jpeg" },
    { title: "BMW at beautiful scenery", src: "./img/cars/bmw-2.jpeg" },
    { title: "BMW in front of a beautiful sunset", src: "./img/cars/bmw-sunset.jpeg" },
    { title: "Close-up of passat", src: "./img/cars/passat-1.jpeg" },
    { title: "Passat showing off his cheeky grin", src: "./img/cars/passat-2.jpeg" },
    { title: "Passat chilling with snow", src: "./img/cars/passat-snow.jpeg" },
    { title: "Audi R8 struts in front of beautiful scenery", src: "./img/cars/audi-r8.png" },
    { title: "Audi enjoying snowfall", src: "./img/cars/audi-snow.png" },
    { title: "Beautiful Mercedes C Class", src: "./img/cars/mercedes-1.png" },
]

function loadAlbum(selec) {
    albumContainer.innerHTML = "";
    albumContainer.innerHTML += `<img src="./assets/svg/Back_Arrow.svg" alt="Zurück zur Startseite" class="back" onclick="loadAlbums()"/>`;

    if (albumContainer.classList.contains("grid-repeat2")) {
        albumContainer.classList.remove("grid-repeat2")
    }

    albumContainer.classList.add("grid-repeat5")

    if (selec == 1) {
        h1.innerHTML = "Animals";

        for (let [index, { title, src }] of album_1.entries()) {
            userCurrentlyinAlbum = 1;
            albumContainer.innerHTML += `
            <div class="gallery-img">
            <img src="${src}" alt="${title}" onclick="showDialog(src, ${index})">
            </div>
        `;
        }

    }

    if (selec == 2) {
        h1.innerHTML = "Cars";

        for (let [index, { title, src }] of album_2.entries()) {
            userCurrentlyinAlbum = 2;
            albumContainer.innerHTML += `
            <div class="gallery-img">
            <img src="${src}" alt="${title}" onclick="showDialog(src, ${index}, ${userCurrentlyinAlbum})">
            </div>
        `;
        }
    }
}