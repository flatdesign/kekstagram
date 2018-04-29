"use strict";   // Файл для генерации данных

(function() {
	window.data = {
		gallery: document.querySelector(".gallery-overlay"),
		renderMainPhoto: function(evt) {
			window.data.gallery.querySelector(".gallery-overlay-image").src = evt.target.src;
			window.data.gallery.querySelector(".likes-count").textContent = evt.target.parentNode.querySelector(".picture-likes").textContent;
			window.data.gallery.querySelector(".comments-count").textContent = evt.target.parentNode.querySelector(".picture-comments").textContent;
		},
		renderMainPhotoEnter: function(evt) {
			window.data.gallery.querySelector(".gallery-overlay-image").src = evt.target.querySelector("img").src;
			window.data.gallery.querySelector(".likes-count").textContent = evt.target.querySelector(".picture-likes").textContent;
			window.data.gallery.querySelector(".comments-count").textContent = evt.target.querySelector(".picture-comments").textContent;
		}
	};
	var picturesContainer = document.querySelector(".pictures");
	var pictureElement = document.querySelector(".picture");
	var findTemplate = document.querySelector("#picture-template").content.querySelector(".picture");

	window.getRandom = function(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	var commentExamples = ["Всё отлично!", "В целом всё неплохо. Но не всё.", "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.", "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.", "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.", "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"];
	var photos = [
	{
		url: "photos/1.jpg",
		likes: 25,
		comments: 3
	},
	{
		url: "photos/2.jpg",
		likes: 40,
		comments: 8
	},
	{
		url: "photos/3.jpg",
		likes: 5,
		comments: 1
	},
	{
		url: "photos/4.jpg",
		likes: 99,
		comments: 30
	},
	{
		url: "photos/5.jpg",
		likes: 45,
		comments: 18
	},
	{
		url: "photos/6.jpg",
		likes: 108,
		comments: 44
	},
	{
		url: "photos/7.jpg",
		likes: 90,
		comments: 2
	},
	{
		url: "photos/8.jpg",
		likes: 36,
		comments: 1
	},
	{
		url: "photos/9.jpg",
		likes: 78,
		comments: 34
	},
	{
		url: "photos/10.jpg",
		likes: 20,
		comments: 2
	},
	{
		url: "photos/11.jpg",
		likes: getRandom(15, 200),
		comments: getRandom(10, 50)
	},
	{
		url: "photos/12.jpg",
		likes: 139,
		comments: 47
	},
	{
		url: "photos/13.jpg",
		likes: 18,
		comments: 3
	},
	{
		url: "photos/14.jpg",
		likes: 56,
		comments: 2
	},
	{
		url: "photos/15.jpg",
		likes: 89,
		comments: 23
	},
	{
		url: "photos/16.jpg",
		likes: 90,
		comments: 5
	},
	{
		url: "photos/17.jpg",
		likes: 56,
		comments:  17
	},
	{
		url: "photos/18.jpg",
		likes: 89,
		comments: 10
	},
	{
		url: "photos/19.jpg",
		likes: 149,
		comments: 37
	},
	{
		url: "photos/20.jpg",
		likes: 88,
		comments: 33
	},
	{
		url: "photos/21.jpg",
		likes: 67,
		comments: 6
	},
	{
		url: "photos/22.jpg",
		likes: 67,
		comments: 5
	},
	{
		url: "photos/23.jpg",
		likes: 130,
		comments: 29
	},
	{
		url: "photos/24.jpg",
		likes: 134,
		comments: 31
	},
	{
		url: "photos/25.jpg",
		likes: 59,
		comments: 2 
	}
	];



//====================== Отрисовка изображений ====================	

	var renderPhoto = function(arr) {
		var photoElement = findTemplate.cloneNode(true);
		photoElement.querySelector("img").src = arr.url;
		photoElement.querySelector(".picture-likes").textContent = arr.likes + "";
		photoElement.querySelector(".picture-comments").textContent = arr.comments + "";
		return photoElement;
	}


var render = function(photos) {
	while(picturesContainer.firstChild) {
		picturesContainer.removeChild(picturesContainer.firstChild);
	}
	var fragment = document.createDocumentFragment();
	for(var i = 0; i < photos.length; i++) {
		fragment.appendChild(renderPhoto(photos[i]));
	};
	picturesContainer.appendChild(fragment);
};


var filters = document.querySelector(".filters");
filters.classList.remove("hidden");

var sortRecommend = function() {
	render(photos);
};

var sortPopular = function() {
	render(photos.slice().sort(function(left, right) {
		return right.likes - left.likes;
	}));
};

var sortDiscussed = function() {
	render(photos.slice().sort(function(left, right) {
		return right.comments - left.comments;
	}));
};

var sortRandom = function() {
	render(photos.slice().sort(function() {
		return getRandom(0, 100) - getRandom(0, 100);
	}));
};




var recommend = filters.querySelector("#filter-recommend");
var popular = filters.querySelector("#filter-popular");
var discussed = filters.querySelector("#filter-discussed");
var random = filters.querySelector("#filter-random");

if(recommend.checked) {
		render(photos);
	} else if (popular.checked){
		sortPopular();
	}	else if (discussed.checked) {
		sortDiscussed();
	} else if (random.checked) {
		sortRandom();
	}

var prevTimer;
var debounce = function(action, prevTimer) {
	window.clearTimeout(prevTimer);
	prevTimer = window.setTimeout(action, 300);
};

filters.addEventListener("change", function() {
		if(recommend.checked) {
		debounce(sortRecommend, prevTimer);
	} else if (popular.checked){
		debounce(sortPopular, prevTimer);
	}	else if (discussed.checked) {
		debounce(sortDiscussed, prevTimer);
	} else if (random.checked) {
		debounce(sortRandom, prevTimer);
	}
});


})();