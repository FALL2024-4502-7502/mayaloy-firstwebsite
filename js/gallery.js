"use strict";

var photoDivs = document.getElementsByClassName("gallery-image");
var nextButton = document.getElementById("button_next");
var previousButton = document.getElementById("button_previous");
var photoNumber = document.getElementById("stepper");
var currentPhotoNumber = 0;

// Initially show the first image and set the photo number
photoDivs[currentPhotoNumber].classList.remove('hideThis');
photoNumber.innerHTML = (currentPhotoNumber + 1) + " / " + photoDivs.length;

// Next Button - Move to the next image
nextButton.addEventListener('click', function() {
    photoDivs[currentPhotoNumber].classList.add("hideThis");
    currentPhotoNumber = (currentPhotoNumber + 1) % photoDivs.length;
    photoDivs[currentPhotoNumber].classList.remove('hideThis');
    photoNumber.innerHTML = (currentPhotoNumber + 1) + " / " + photoDivs.length;
});

// Previous Button - Move to the previous image
previousButton.addEventListener('click', function() {
    photoDivs[currentPhotoNumber].classList.add("hideThis");
    currentPhotoNumber = (currentPhotoNumber - 1 + photoDivs.length) % photoDivs.length;
    photoDivs[currentPhotoNumber].classList.remove('hideThis');
    photoNumber.innerHTML = (currentPhotoNumber + 1) + " / " + photoDivs.length;
});
