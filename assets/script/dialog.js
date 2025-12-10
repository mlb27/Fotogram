function showDialog(image) {
    dialog.innerHTML += `<img src="${image}" alt="" class="fullscreen_image"/>`;
    dialog.showModal();
}

function closeDialog() {
    dialog.close()
    dialogReset();
}