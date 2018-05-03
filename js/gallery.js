"use strict";    // Файл для работы с взаимодействием с изображениями

(function() {
	window.KeyCode = {
		ESC: 27,
		ENTER: 13
	};
	var galleryClose = document.querySelector(".gallery-overlay-close");
	var picturesContainer = document.querySelector(".pictures");

	var closePopup = function() {
	window.data.gallery.classList.add('hidden');
	document.removeEventListener('keydown', onPopupEscPress);
	};

	var openPopup = function() {
		window.data.gallery.classList.remove('hidden');
		document.addEventListener('keydown', onPopupEscPress);
	};

	var onPopupEscPress = function(evt) {
		if(evt.keyCode === window.KeyCode.ESC) {
			closePopup();
		}
	};

	galleryClose.addEventListener('click', function() {
		closePopup();
	});

	galleryClose.addEventListener('keydown', function(evt) {
		if(evt.keyCode === window.KeyCode.ENTER) {
			closePopup();
		}
	});

	picturesContainer.addEventListener('click', function(event) {
		if(event.target.tagName == "IMG") {
			window.data.renderMainPhoto(event);
			openPopup();
			event.preventDefault();
		}
	});

	picturesContainer.addEventListener('keydown', function(evt) {
	if(evt.target.tagName == "A" && evt.keyCode === window.KeyCode.ENTER) {
		window.data.renderMainPhotoEnter(evt);
		openPopup();
		evt.preventDefault()
	}
	});


})();