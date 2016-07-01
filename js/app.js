var mainnav = document.querySelector(".main-nav");
var mainnavopenclose = document.querySelector(".main-nav__open-close");
var mainnavlogo = document.querySelector(".main-nav__logo");

var labelcrop = document.querySelector(".upload-photo__instument--crop");
var labelfill = document.querySelector(".upload-photo__instument--fill");
var labelcontrast = document.querySelector(".upload-photo__instument--contrast");

var inputcrop = document.querySelector(".upload-photo__inputs--crop");
var inputfill = document.querySelector(".upload-photo__inputs--fill");
var inputcontrast = document.querySelector(".upload-photo__inputs--contrast");

mainnav.classList.add("main-nav--closed");

mainnavopenclose.addEventListener("click", function(event) {
  if (mainnav.classList.contains("main-nav--closed")) {
    event.preventDefault();
    mainnav.classList.remove("main-nav--closed");
    mainnav.classList.add("main-nav--opened");
  }
  else if (mainnav.classList.contains("main-nav--opened")) {
    event.preventDefault();
    mainnav.classList.remove("main-nav--opened");
    mainnav.classList.add("main-nav--closed");
  }
});

labelcrop.addEventListener("click", function(event) {
  if (inputcrop.classList.contains("upload-photo__inputs--none")) {
    event.preventDefault();
    inputcrop.classList.remove("upload-photo__inputs--none");
    inputfill.classList.add("upload-photo__inputs--none");
    inputcontrast.classList.add("upload-photo__inputs--none");
    labelcrop.classList.add("upload-photo__instument--active");
    labelfill.classList.remove("upload-photo__instument--active");
    labelcontrast.classList.remove("upload-photo__instument--active");
  }
});
labelfill.addEventListener("click", function(event) {
  if (inputfill.classList.contains("upload-photo__inputs--none")) {
    event.preventDefault();
    inputfill.classList.remove("upload-photo__inputs--none");
    inputcrop.classList.add("upload-photo__inputs--none");
    inputcontrast.classList.add("upload-photo__inputs--none");
    labelcrop.classList.remove("upload-photo__instument--active");
    labelfill.classList.add("upload-photo__instument--active");
    labelcontrast.classList.remove("upload-photo__instument--active");
  }
});
labelcontrast.addEventListener("click", function(event) {
  if (inputcontrast.classList.contains("upload-photo__inputs--none")) {
    event.preventDefault();
    inputcontrast.classList.remove("upload-photo__inputs--none");
    inputfill.classList.add("upload-photo__inputs--none");
    inputcrop.classList.add("upload-photo__inputs--none");
    labelcrop.classList.remove("upload-photo__instument--active");
    labelfill.classList.remove("upload-photo__instument--active");
    labelcontrast.classList.add("upload-photo__instument--active");
  }
});
