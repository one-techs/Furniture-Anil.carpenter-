// Open the popup with the image
function openPopup(imageSrc) {
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    popupImage.src = imageSrc;
    popup.style.display = "flex"; // Show the popup
}

// Close the popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; // Hide the popup
}

// Close popup when clicking outside the content
window.onclick = function (event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        closePopup();
    }
};
