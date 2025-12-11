let currentImageIndex = 0;

function showDialog(image, index) {
    currentImageIndex = index;
    console.log(currentImageIndex);


    dialog.innerHTML += `<img src="${image}" alt="" class="fullscreen_image"/>`;
    dialog.showModal();
}

function closeDialog() {
    dialog.close()
    dialogReset();
}

function lastImage() {
    console.log(currentImageIndex);
    if (currentImageIndex == 0) {
        return;

    }
    else {
        console.log(currentImageIndex);
        let toLoad = currentImageIndex - 1;
        console.log(toLoad);

        dialog.innerHTML = "";
        dialogReset();
        showDialog(animals_images[toLoad].src, toLoad);
    }

}

function nextImage() {
    console.log(currentImageIndex);
    if (currentImageIndex == 0) {
        let toLoad = currentImageIndex + 1;
        console.log(toLoad);

        dialog.innerHTML = "";
        dialogReset();
        showDialog(animals_images[toLoad].src, toLoad);
    }
    else if (currentImageIndex > 0) {

        let toLoad = currentImageIndex + 1;
        console.log(toLoad);

        dialog.innerHTML = "";
        dialogReset();
        showDialog(animals_images[toLoad].src, toLoad);
    }
    // else if (currentImageIndex + 1 > animals_images[toLoad].index) {
    //     return "nein";
    // }
}