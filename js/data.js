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

})();