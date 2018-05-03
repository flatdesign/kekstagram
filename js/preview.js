"use strict";    // Файл для загрузки главного фото

(function() {
	var load = document.querySelector("#upload-file");
	var uploadOverlay = document.querySelector(".upload-overlay");
	var uploadCansel = document.querySelector(".upload-form-cancel");


	var openUpload = function() {
	uploadOverlay.classList.remove("hidden");
	document.addEventListener("keydown", onUploadEscPress);
	};

	var closeUpload = function() {
		uploadOverlay.classList.add("hidden");
		document.removeEventListener("keydown", onUploadEscPress);
	};

	var onUploadEscPress = function(evt) {
		if(evt.keyCode === window.KeyCode.ESC && document.activeElement != window.comment) {
			closeUpload();
		}
	};

	load.addEventListener("change", function() {
		openUpload();
	});

	uploadCansel.addEventListener("click", function() {
		closeUpload();
	});

	uploadCansel.addEventListener("keydown", function(evt) {
		if(evt.keyCode === window.KeyCode.ENTER) {
			closeUpload();
		}	
	});

})();