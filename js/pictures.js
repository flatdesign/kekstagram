'use strict'

var KeyCode = {
	ESC: 27,
	ENTER: 13
}

var pictureElement = document.querySelector(".picture");
var findTemplate = document.querySelector("#picture-template").content.querySelector(".picture");
var picturesContainer = document.querySelector(".pictures");
var gallery = document.querySelector(".gallery-overlay");
var galleryClose = document.querySelector('.gallery-overlay-close');
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}


var closePopup = function() {
	gallery.classList.add('hidden');
	document.removeEventListener('keydown', onPopupEscPress);
};

var openPopup = function() {
	gallery.classList.remove('hidden');
	document.addEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function(evt) {
	if(evt.keyCode === KeyCode.ESC) {
		closePopup();
	}
};



galleryClose.addEventListener('click', function() {
	closePopup();
});

galleryClose.addEventListener('keydown', function(evt) {
	if(ent,keyCode === KeyCode.ENTER) {
		closePopup();
	}
});

picturesContainer.addEventListener('click', function(evt) {
	if(evt.target.tagName == "IMG") {
		renderMainPhoto(evt);
		openPopup();
		evt.preventDefault();
	}
});


var renderMainPhoto = function(evt) {
	gallery.querySelector(".gallery-overlay-image").src = evt.target.parentNode.querySelector("img").src;
	gallery.querySelector(".likes-count").textContent = evt.target.parentNode.querySelector(".picture-likes").textContent;
	gallery.querySelector(".comments-count").textContent = evt.target.parentNode.querySelector(".picture-comments").textContent;
};

var renderMainPhotoEnter = function(evt) {
	gallery.querySelector(".gallery-overlay-image").src = evt.target.querySelector("img").src;
	gallery.querySelector(".likes-count").textContent = evt.target.querySelector(".picture-likes").textContent;
	gallery.querySelector(".comments-count").textContent = evt.target.querySelector(".picture-comments").textContent;
};


picturesContainer.addEventListener('keydown', function(evt) {
	if(evt.target.tagName == "A" && evt.keyCode === KeyCode.ENTER) {
		renderMainPhotoEnter(evt);
		openPopup();
		evt.preventDefault()
	}
});


var commentExamples = ["Всё отлично!", "В целом всё неплохо. Но не всё.", "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.", "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.", "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.", "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"];
var photos = [
{
	url: "photos/1.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/2.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/3.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/4.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ] 
},
{
	url: "photos/5.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/6.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/7.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/8.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/9.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/10.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/11.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/12.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/13.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/14.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/15.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/16.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/17.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ] 
},
{
	url: "photos/18.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/19.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/20.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/21.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/22.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/23.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/24.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ]
},
{
	url: "photos/25.jpg",
	likes: getRandom(15, 200),
	comments: [commentExamples[getRandom(0, 5)], commentExamples[getRandom(0, 5)] ] 
}
];

var renderPhoto = function(arr) {
	var photoElement = findTemplate.cloneNode(true);
	photoElement.querySelector("img").src = arr.url;
	photoElement.querySelector(".picture-likes").textContent = arr.likes + "";
	photoElement.querySelector(".picture-comments").textContent = arr.comments.length + "";
	return photoElement;
}

var fragment = document.createDocumentFragment();
for(var i = 0; i < photos.length; i++) {
	fragment.appendChild(renderPhoto(photos[i]));
};

picturesContainer.appendChild(fragment);


// ==================== Загрузка фотографии ====================

var load = document.querySelector("#upload-file");
var uploadOverlay = document.querySelector(".upload-overlay");
var uploadCansel = document.querySelector(".upload-form-cancel");
var comment = document.querySelector(".upload-form-description");
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





////////////////////////////////////////////////


var openUpload = function() {
	uploadOverlay.classList.remove("hidden");
	document.addEventListener("keydown", onUploadEscPress);
};

var closeUpload = function() {
	uploadOverlay.classList.add("hidden");
	document.removeEventListener("keydown", onUploadEscPress);
};

var onUploadEscPress = function(evt) {
	if(evt.keyCode === KeyCode.ESC && document.activeElement != comment) {
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
	if(evt.keyCode === KeyCode.ENTER) {
		closeUpload();
	}	
});

comment.addEventListener("invalid", function(evt) {
	if(comment.validity.tooShort) {
		comment.setCustomValidity("Комментарий должен быть больше 2 символов")
		comment.style.border = "2px solid red";
	} else if (comment.validity.tooLong) {
		comment.setCustomValidity("Комментарий не должен превышать 140 символов");
		comment.style.border = "2px solid red";
	} else {
		comment.setCustomValidity("");
	}
});

var imagePreview = document.querySelector(".effect-image-preview");

var effectConrols = document.querySelector(".upload-effect-controls");

var effectNameToClassName = {
	"upload-effect-none": "effect-none",
	"upload-effect-chrome": "effect-chrome",
	"upload-effect-sepia": "effect-sepia",
	"upload-effect-marvin": "effect-marvin",
	"upload-effect-phobos": "effect-phobos",
	"upload-effect-heat": "effect-heat"
}

effectConrols.addEventListener("click", function(evt) {
	if(evt.target.className = "upload-effect-preview") {
		evt.preventDefault();
		var nameOfClass = evt.target.parentNode.getAttribute("For");
		imagePreview.className = "";
		imagePreview.classList.add("effect-image-preview");
		imagePreview.classList.add(effectNameToClassName[nameOfClass]);
	}
});


var resizeControls = document.querySelector(".upload-resize-controls");

var valueControl = resizeControls.querySelector(".upload-resize-controls-value");

var buttonDec = resizeControls.querySelector(".upload-resize-controls-button-dec");

var buttonInc = resizeControls.querySelector(".upload-resize-controls-button-inc");

buttonDec.addEventListener("click", function() {
	var sliseString = Number(valueControl.value.slice(0, -1));
	if(sliseString > 25) {
		valueControl.value = sliseString - 25;
		var forScale = "scale(" + valueControl.value/100 +")";
		valueControl.value = valueControl.value + "%";
		imagePreview.style.transform = forScale;	
	}
});

buttonInc.addEventListener("click", function() {
	var sliseString = Number(valueControl.value.slice(0, -1));
	if(sliseString < 100) {
		valueControl.value = sliseString + 25;
		var forScale = "scale(" + valueControl.value/100 +")";
		valueControl.value = valueControl.value + "%";
		imagePreview.style.transform = forScale;	
	}	
});



























