let album_1 = [
    {
        title: "Maxi and Amy watching birds",
        src: "./img/animals/Maxi-und-Amy.jpeg"
    },
    { title: "Amy enjoying the view", src: "./img/animals/Amy.jpg" },
    {
        title: "Little Maxi and Amy sleeping peacefully",
        src: "./img/animals/Baby-Maxi-und-Amy.jpg"
    },
    { title: "Lilly exploring nature", src: "./img/animals/Lilly.jpeg" },
    { title: "Amy licking her paw", src: "./img/animals/Amy-Chilling.JPG" },
    {
        title: "Baby Maxi and Amy cuddling",
        src: "./img/animals/Maxi-And-Amy-Baby.jpg"
    },
    { title: "Rudy grinning", src: "./img/animals/rudy-grin.jpeg" },
    { title: "Rudy's very long", src: "./img/animals/rudy-long.jpeg" },
    { title: "Rudy observing nature", src: "./img/animals/rudy-1.jpeg" }
];
let album_2 = [
    { title: "BMW identifying as a bus", src: "./img/cars/bmw-1.png" },
    { title: "BMW at beautiful scenery", src: "./img/cars/bmw-2.png" },
    {
        title: "BMW in front of a beautiful sunset",
        src: "./img/cars/bmw-sunset.jpeg"
    },
    {
        title: "Passat showing off his cheeky grin",
        src: "./img/cars/passat-2.png"
    },
    { title: "Passat chilling with snow", src: "./img/cars/passat-snow.jpeg" },
    {
        title: "Passat chilling at gas station",
        src: "./img/cars/passat-gasstation.jpeg"
    },
    {
        title: "Audi R8 struts in front of beautiful scenery",
        src: "./img/cars/audi-r8.png"
    },
    { title: "Audi enjoying snowfall", src: "./img/cars/audi-snow.png" },
    { title: "Beautiful Mercedes C Class", src: "./img/cars/mercedes-1.png" },
    {
        title: "Amazing BMW Suv at beautiful scenery",
        src: "./img/cars/bmw-3.png"
    }
];

function getSelectedAlbum(selected) {
    if (selected == 1) {
        userCurrentlyinAlbum = 1;
        h1.innerHTML = "Animals";
        return album_1;
    } else if (selected == 2) {
        h1.innerHTML = "Cars";
        userCurrentlyinAlbum = 2;
        return album_2;
    }
}

function loadAlbum(selected) {
    setPhotoOverviewCssGrid();
    renderAlbumOverview();
    let album = getSelectedAlbum(selected);
    for (let i = 0; i < album.length; i++) {
        let image = album[i];
        albumContainer.innerHTML += `<div class="gallery-img">
            <button type="button" class="gallery-button" onclick="showDialog('${image.src}', ${i})">
                <img src="${image.src}" alt="${image.title}">
            </button>
        </div>`;
    }
}

function renderAlbumOverview() {
    albumContainer.innerHTML = "";
    albumContainer.innerHTML += `<button type="button" class="back-button" aria-label="Zurueck zur Startseite" onclick="init()"><img src="./assets/svg/Back_Arrow.svg" alt="" class="back"></button>`;
}
