let animals_images = [
    { title: "Maxi and Amy watching birds", src: "./img/cat/Maxi-und-Amy.jpeg" },
    { title: "Amy enjoying the view", src: "./img/cat/Amy.jpg" },
    { title: "Little Maxi and Amy sleeping peacefully", src: "./img/cat/Baby-Maxi-und-Amy.jpg" },
    { title: "Lilly exploring nature", src: "./img/cat/Lilly.jpeg" },
];

let cars_images = [
    { title: "BMW identifying as a bus", src: "./img/cars/bmw-1.jpeg" },
    { title: "BMW at beautiful scenery", src: "./img/cars/bmw-2.jpeg" },
    { title: "BMW in front of a beautiful sunset", src: "./img/cars/bmw-sunset.jpeg" },
    { title: "Close-up of passat", src: "./img/cars/passat-1.jpeg" },
    { title: "Passat showing off his cheeky grin", src: "./img/cars/passat-2.jpeg" },
    { title: "Passat chilling with snow", src: "./img/cars/passat-snow.jpeg" },
]

function loadAlbum(selec) {
    albumContainer.innerHTML = "";
    albumContainer.innerHTML += `<img src="./assets/svg/Back_Arrow.svg" alt="Zurück zur Startseite" class="back" onclick="loadAlbums()"/>`;

    if (selec == 1) {
        const selec = 1;

        for (let { title, src } of animals_images) {
            albumContainer.innerHTML += `
            <div class="gallery-img">
            <img src="${src}" alt="${title}" onclick="showDialog(src)">
            </div>
        `;
        }

        console.log(selec);

    }

    if (selec == 2) {
        const selec = 2;

        for (let { title, src } of cars_images) {
            albumContainer.innerHTML += `
            <div class="gallery-img">
            <img src="${src}" alt="${title}" onclick="showDialog(src)">
            </div>
        `;
        }

        console.log(selec);
    }
}