let album_1 = [
    { title: "Maxi and Amy watching birds", src: "./img/animals/Maxi-und-Amy.jpeg" },
    { title: "Amy enjoying the view", src: "./img/animals/Amy.jpg" },
    { title: "Little Maxi and Amy sleeping peacefully", src: "./img/animals/Baby-Maxi-und-Amy.jpg" },
    { title: "Lilly exploring nature", src: "./img/animals/Lilly.jpeg" },
    { title: "Amy licking her paw", src: "./img/animals/Amy-Chilling.JPG" },
    { title: "Baby Maxi and Amy cuddling", src: "./img/animals/Maxi-And-Amy-Baby.jpg" },
    { title: "Rudy grinning", src: "./img/animals/rudy-grin.jpeg" },
    { title: "Rudy's very long", src: "./img/animals/rudy-long.jpeg" },
    { title: "Rudy observing nature", src: "./img/animals/rudy-1.jpeg" },
];
let album_2 = [
    { title: "BMW identifying as a bus", src: "./img/cars/bmw-1.png" },
    { title: "BMW at beautiful scenery", src: "./img/cars/bmw-2.png" },
    { title: "BMW in front of a beautiful sunset", src: "./img/cars/bmw-sunset.jpeg" },
    { title: "Passat showing off his cheeky grin", src: "./img/cars/passat-2.png" },
    { title: "Passat chilling with snow", src: "./img/cars/passat-snow.jpeg" },
    { title: "Passat chilling at gas station", src: "./img/cars/passat-gasstation.jpeg" },
    { title: "Audi R8 struts in front of beautiful scenery", src: "./img/cars/audi-r8.png" },
    { title: "Audi enjoying snowfall", src: "./img/cars/audi-snow.png" },
    { title: "Beautiful Mercedes C Class", src: "./img/cars/mercedes-1.png" },
    { title: "Amazing BMW Suv at beautiful scenery", src: "./img/cars/bmw-3.png" },
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