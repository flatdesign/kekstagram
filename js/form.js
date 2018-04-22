"use strict";

(function() {
	window.comment = document.querySelector(".upload-form-description");
	var submit = document.querySelector(".upload-form-submit");
	var hashtags = document.querySelector(".upload-form-hashtags");

	hashtags.addEventListener("invalid", function(evt) {
	var hashtagsValue = document.querySelector(".upload-form-hashtags").value;
	var hashtagsArr = hashtagsValue.split(" ");
	while(hashtagsArr[hashtagsArr.length - 1] == 0) {
		delete hashtagsArr.pop();
	}

	for(var i = 0; i < hashtagsArr.length; i++) {
		if(hashtagsArr.length > 5) {
			hashtags.style.border = "2px solid red";
			hashtags.setCustomValidity("Хэш-тегов не должно быть больше 5");
			break;
		} else if (hashtagsArr[i].length > 20) {
				hashtags.style.border = "2px solid red";
				hashtags.setCustomValidity("Хэш-тег не должен быть больше 20 символов");
				break;
		} else if(hashtagsArr[i][0] != "#") {
				hashtags.style.border = "2px solid red";
				hashtags.setCustomValidity("Хэш-тег должен начинаться с #");
				break;
		} else {
				hashtags.setCustomValidity("");
		}
	}

	});

	submit.addEventListener("click", function(evt) {
	var hashtagsValue = document.querySelector(".upload-form-hashtags").value;
	var hashtagsArr = hashtagsValue.split(" ");
	while(hashtagsArr[hashtagsArr.length - 1] == 0) {
		delete hashtagsArr.pop();
	}

	var hashtagsArrSecond = [];
	var hashtagsArrLower;
	var count = 0;

	for(var i = 0; i < hashtagsArr.length; i ++) {
		hashtagsArrSecond[i] = hashtagsArr[i].toLowerCase();
	}
		
	 for(var i = 0; i < hashtagsArr.length; i++) {
	 	for(var j = 0; j < hashtagsArrSecond.length; j++) {
	 		hashtagsArrLower = hashtagsArr[i].toLowerCase();
	 		if (hashtagsArrLower === hashtagsArrSecond[j]) {
	 			count ++ 
	 		}
	 	}
	 }
	 if(count > hashtagsArr.length) {
	 	evt.preventDefault();
	 	alert("Хэш-теги не должны повторяться");	
		}
	});

	window.comment.addEventListener("invalid", function(evt) {
	if(window.comment.validity.tooShort) {
		window.comment.setCustomValidity("Комментарий должен быть больше 2 символов")
		window.comment.style.border = "2px solid red";
	} else if (window.comment.validity.tooLong) {
		window.comment.setCustomValidity("Комментарий не должен превышать 140 символов");
		window.comment.style.border = "2px solid red";
	} else {
		window.comment.setCustomValidity("");
	}
	});


})();