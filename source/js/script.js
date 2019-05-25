var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var map = document.querySelector('.contacts__map');
var mapImage = document.querySelector('.contacts__map-image-pin');

var order = document.querySelector(".button--order");
var order1 = document.querySelector(".button--order-1");
var order2 = document.querySelector(".button--order-2");
var order3 = document.querySelector(".button--order-3");

var popup = document.querySelector(".modal");
var popupBlock = document.querySelector(".modal__block");

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
  mapImage.classList.remove('map-show');
}

if (map) {
map.classList.add('map-show');
}

if (order) {
order.addEventListener("click", function (evt) {
  popup.classList.add("modal-show");
  popupBlock.classList.add("modal-show");
});
}

if (order1) {
order1.addEventListener("click", function (evt) {
  popup.classList.add("modal-show");
  popupBlock.classList.add("modal-show");
});
}

if (order2) {
order2.addEventListener("click", function (evt) {
  popup.classList.add("modal-show");
  popupBlock.classList.add("modal-show");
});
}

if (order3) {
order3.addEventListener("click", function (evt) {
  popup.classList.add("modal-show");
  popupBlock.classList.add("modal-show");
});
}

popupBlock.addEventListener("click", function (evt) {
  popup.classList.remove("modal-show");
  popupBlock.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popupBlock.classList.remove("modal-show");
    }
  }
});
