let currentImageIndex = 0;
let toLoad = 0;
let isInAlbum = 0;

function showDialog(image, index) {
    currentImageIndex = index;
    init();
    dialog.innerHTML += `<img src="${image}" alt="" class="fullscreen_image"/>`;
    if (!dialog.open) {
        dialog.showModal();
    }
}

function closeDialog() {
    dialog.close()
}

function lastImage() {
    let currentAlbumData;
    if (userCurrentlyinAlbum === 1) {
        currentAlbumData = album_1;
    } else {
        currentAlbumData = album_2;
    }
    currentImageIndex = currentImageIndex - 1;
    if (currentImageIndex < 0) {
        currentImageIndex = currentAlbumData.length - 1;
    }
    let newImageSrc = currentAlbumData[currentImageIndex].src;
    showDialog(newImageSrc, currentImageIndex)
}

function nextImage() {
    let currentAlbumData;
    if (userCurrentlyinAlbum === 1) {
        currentAlbumData = album_1;
    } else {
        currentAlbumData = album_2;
    }
    currentImageIndex = currentImageIndex + 1;
    if (currentImageIndex >= currentAlbumData.length) {
        currentImageIndex = 0;
    }
    let newImageSrc = currentAlbumData[currentImageIndex].src;
    showDialog(newImageSrc, currentImageIndex)
}

window.addEventListener("keydown", function (e) {
    if (!dialog.open) {
        return;
    }
    if (e.key === "ArrowLeft") {
        lastImage();
    }
    else if (e.key === "ArrowRight") {
        nextImage();
    }
    else if (e.key === "Escape") {
        closeDialog();
    }
});

dialog.addEventListener("click", (event) => {
    if (!dialog.open) return;
    const rect = dialog.getBoundingClientRect();
    const istInDialog = (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
    );
    if (!istInDialog) {
        closeDialog();
    }
});