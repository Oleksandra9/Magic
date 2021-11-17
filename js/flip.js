const inputImage = document.querySelector(".image-tulips");

// need to check if the image has already loaded
if (inputImage.complete) {
  flipImage();
}
// if not, we wait for the onload callback to fire
else {
  inputImage.onload = flipImage;
}

// this function will flip the imagedata
function flipImage() {
  // create a canvas that will present the output image
  const outputImage = document.createElement("canvas");

  // set it to the same size as the image
  outputImage.width = inputImage.naturalWidth;
  outputImage.height = inputImage.naturalHeight;

  // get the drawing context, needed to draw the new image
  const ctx = outputImage.getContext("2d");

  // scale the drawing context negatively to the left (our image is 400 pixels wide)
  // resulting change to context: 0 to 400 -> -400 to 0
  ctx.scale(-1, 1);

  // draw our image at position [-width, 0] on the canvas, we need
  // a negative offset because of the negative scale transform
  ctx.drawImage(inputImage, -outputImage.width, 0);

  // insert the output image after the input image
  inputImage.parentNode.insertBefore(
    outputImage,
    inputImage.nextElementSibling
  );
}