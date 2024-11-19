"use strict";

var photoDivs = document.getElementsByClassName("gallery-image");

var nextButton = document.getElementById("button_next");
var previousButton = document.getElementById("button_previous");

var photoNumber = document.getElementById("stepper");

var currentPhotoNumber = 0;

// Ensure the first image is visible and others are hidden
photoDivs[currentPhotoNumber].classList.remove('hideThis');
photoNumber.innerHTML = (currentPhotoNumber + 1) + " / " + photoDivs.length;

nextButton.addEventListener('click', function() {
  // Hide current image
  photoDivs[currentPhotoNumber].classList.add("hideThis");

  // Increment the photo index
  currentPhotoNumber = currentPhotoNumber + 1;

  // Loop back to the first image if at the end
  if (currentPhotoNumber === photoDivs.length) {
    currentPhotoNumber = 0;
  }

  // Show the next image
  photoDivs[currentPhotoNumber].classList.remove('hideThis');

  // Update the photo number display
  photoNumber.innerHTML = (currentPhotoNumber + 1) + " / " + photoDivs.length;
});

previousButton.addEventListener('click', function() {
  // Hide current image
  photoDivs[currentPhotoNumber].classList.add("hideThis");

  // Decrement the photo index
  currentPhotoNumber = currentPhotoNumber - 1;

  // Loop back to the last image if at the beginning
  if (currentPhotoNumber < 0) {
    currentPhotoNumber = photoDivs.length - 1;
  }

  // Show the previous image
  photoDivs[currentPhotoNumber].classList.remove('hideThis');

  // Update the photo number display
  photoNumber.innerHTML = (currentPhotoNumber + 1) + " / " + photoDivs.length;
});
