let currentImageIndex = 0;
let toLoad = 0;
let isInAlbum = 0;

function showDialog(image, index) {
    currentImageIndex = index;
    if (!dialog.open) {
        dialog.innerHTML = dialogInnerHTML;
        dialog.innerHTML += `<img src="${image}" class="fullscreen_image"/>`;
        dialog.showModal();
    }
    else {
        const img = dialog.querySelector(".fullscreen_image");
        img.src = image;
    }
}

function closeDialog() {
    dialog.close();
}

function getCurrentAlbumData() {
    let currentAlbumData;
    if (userCurrentlyinAlbum === 1) {
        currentAlbumData = album_1;
    } else {
        currentAlbumData = album_2;
    }
    return currentAlbumData;
}

function changeImage(direction) {
    const currentAlbumData = getCurrentAlbumData();

    if (direction === "last") {
        currentImageIndex = currentImageIndex - 1;
        if (currentImageIndex < 0) {
            currentImageIndex = currentAlbumData.length - 1;
        }
    } else if (direction === "next") {
        currentImageIndex = currentImageIndex + 1;
        if (currentImageIndex >= currentAlbumData.length) {
            currentImageIndex = 0;
        }
    } else {
        return;
    }

    let newImageSrc = currentAlbumData[currentImageIndex].src;
    showDialog(newImageSrc, currentImageIndex);
}

function lastImage() {
    changeImage("last");
}

function nextImage() {
    changeImage("next");
}

window.addEventListener("keydown", function (e) {
    if (!dialog.open) {
        return;
    }
    if (e.key === "ArrowLeft") {
        changeImage("last");
    } else if (e.key === "ArrowRight") {
        changeImage("next");
    } else if (e.key === "Escape") {
        closeDialog();
    }
});

dialog.addEventListener("click", (event) => {
    if (!dialog.open) return;
    if (event.target === dialog) {
        closeDialog();
    }
});
