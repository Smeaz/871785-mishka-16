var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var map = document.querySelector('.contacts__map');
var mapImage = document.querySelector('.contacts__map-image-pin');

var order = document.querySelectorAll(".order");

var popup = document.querySelector(".modal");
var popupBackground = document.querySelector(".modal-background");

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

if (mapImage) {
  mapImage.classList.remove('contacts__map-show');
}

if (map) {
  map.classList.add('contacts__map-show');
}

order.forEach( function(elem) {
  elem.addEventListener("click", function (evt) {
    popup.classList.add("modal__modal-show");
    popupBackground.classList.add("modal-background__show");
  });
});

if (popupBackground) {
  popupBackground.addEventListener("click", function (evt) {
    popup.classList.remove("modal__modal-show");
    popupBackground.classList.remove("modal-background__show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal__modal-show")) {
      popup.classList.remove("modal__modal-show");
      popupBackground.classList.remove("modal-background__show");
    }
  }
});
