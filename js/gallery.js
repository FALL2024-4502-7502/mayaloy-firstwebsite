"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var photoDivs = document.getElementsByClassName("gallery-image");
    var nextButton = document.getElementById("button_next");
    var previousButton = document.getElementById("button_previous");
    var photoNumber = document.getElementById("stepper");
    var currentPhotoNumber = 0;

    // Ensure that the photo divs are available
    if (photoDivs.length > 0) {
        photoDivs[currentPhotoNumber].classList.remove('hideThis');
        photoNumber.innerHTML = (currentPhotoNumber + 1) + " / " + photoDivs.length;
    } else {
        console.error("No gallery images found.");
    }

    // Next Button - Move to the next image
    nextButton.addEventListener('click', function() {
        // Hide the current image
        photoDivs[currentPhotoNumber].classList.add("hideThis");
        // Move to the next image
        currentPhotoNumber = (currentPhotoNumber + 1) % photoDivs.length;
        // Show the next image
        photoDivs[currentPhotoNumber].classList.remove('hideThis');
        // Update the counter
        photoNumber.innerHTML = (currentPhotoNumber + 1) + " / " + photoDivs.length;
    });

    // Previous Button - Move to the previous image
    previousButton.addEventListener('click', function() {
        // Hide the current image
        photoDivs[currentPhotoNumber].classList.add("hideThis");
        // Move to the previous image
        currentPhotoNumber = (currentPhotoNumber - 1 + photoDivs.length) % photoDivs.length;
        // Show the previous image
        photoDivs[currentPhotoNumber].classList.remove('hideThis');
        // Update the counter
        photoNumber.innerHTML = (currentPhotoNumber + 1) + " / " + photoDivs.length;
    });
});
