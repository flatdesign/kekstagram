"use strict";

(function() {

	var imagePreview = document.querySelector(".effect-image-preview");
	var effectConrols = document.querySelector(".upload-effect-controls");

	var bigLine = document.querySelector(".upload-effect-level");
	var linePin = bigLine.querySelector(".upload-effect-level-pin");
	var lineColor = bigLine.querySelector(".upload-effect-level-val");
	var lineWidth = 455;
	var result;

	lineColor.style.width = "200px";
	linePin.style.left = "200px";
	bigLine.style.display = "none";

	effectConrols.addEventListener("click", function(evt) {
		if(evt.target.className == "upload-effect-preview") {
			imagePreview.style.filter = "";
			lineColor.style.width = "200px";
			linePin.style.left = "200px";
			var nameOfClass = evt.target.parentNode.getAttribute("For");
			var newNameFirst = nameOfClass.slice(7);
			imagePreview.className = "";
			imagePreview.classList.add("effect-image-preview");
			imagePreview.classList.add(newNameFirst);

			if(imagePreview.className === "effect-image-preview effect-chrome") {
					bigLine.style.display = "block";
					result = +(linePin.style.left.slice(0, -2)) / lineWidth;
					imagePreview.style.filter = "grayscale(" + result + ")";
				}	else if (imagePreview.className === "effect-image-preview effect-sepia")	{
					bigLine.style.display = "block";
					result = +(linePin.style.left.slice(0, -2)) / lineWidth;
					imagePreview.style.filter = "sepia(" + result + ")";
				} else if (imagePreview.className === "effect-image-preview effect-marvin")	{
					bigLine.style.display = "block";
					result = +(linePin.style.left.slice(0, -2)) / (lineWidth/100);
					imagePreview.style.filter = "invert(" + result + "%)";
				} else if (imagePreview.className === "effect-image-preview effect-phobos")	{
					bigLine.style.display = "block";
					result = +(linePin.style.left.slice(0, -2)) / (lineWidth/3);
					imagePreview.style.filter = "blur(" + result + "px)";
				} else if (imagePreview.className === "effect-image-preview effect-heat")	{
					bigLine.style.display = "block";
					result = +(linePin.style.left.slice(0, -2)) / (lineWidth/3);
					imagePreview.style.filter = "brightness(" + result + ")";
				} else {
					bigLine.style.display = "none";
					imagePreview.style.filter = "";
				}
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




	//// ======================== Ползунок ========================


	linePin.addEventListener("mousedown", function(event) {
		event.preventDefault();
		var startCoords = {
			x: event.clientX,
			y: event.clientY
		} 
	

	var onMouseMove = function(moveEvt) {
		moveEvt.preventDefault();

		var shift = {
			x: moveEvt.clientX - startCoords.x,
			y: moveEvt.clientY - startCoords.y
		};

		startCoords = {
			x: moveEvt.clientX,
			y: moveEvt.clientY
		};

		linePin.style.left = (linePin.offsetLeft + shift.x) + "px";
		if ( +(linePin.style.left.slice(0, -2)) > 455) {
			linePin.style.left = "455px";
		};
		if ( +(linePin.style.left.slice(0, -2)) < 0) {
			linePin.style.left = "0px";
		};

		lineColor.style.width = linePin.style.left;

		if(imagePreview.className === "effect-image-preview effect-chrome") {
				result = +(linePin.style.left.slice(0, -2)) / lineWidth;
				imagePreview.style.filter = "grayscale(" + result + ")";
			}	else if (imagePreview.className === "effect-image-preview effect-sepia")	{
				result = +(linePin.style.left.slice(0, -2)) / lineWidth;
				imagePreview.style.filter = "sepia(" + result + ")";
			} else if (imagePreview.className === "effect-image-preview effect-marvin")	{
				result = +(linePin.style.left.slice(0, -2)) / (lineWidth/100);
				imagePreview.style.filter = "invert(" + result + "%)";
			} else if (imagePreview.className === "effect-image-preview effect-phobos")	{
				result = +(linePin.style.left.slice(0, -2)) / (lineWidth/3);
				imagePreview.style.filter = "blur(" + result + "px)";
			} else if (imagePreview.className === "effect-image-preview effect-heat")	{
				result = +(linePin.style.left.slice(0, -2)) / (lineWidth/3);
				imagePreview.style.filter = "brightness(" + result + ")";
			} else {
				imagePreview.style.filter = "";
			}
	};

	var onMouseUp = function(upEvent) {
		upEvent.preventDefault();
		bigLine.removeEventListener("mousemove", onMouseMove);
		bigLine.removeEventListener("mouseup", onMouseUp);
	};

	bigLine.addEventListener("mousemove", onMouseMove);
	bigLine.addEventListener("mouseup", onMouseUp);
	});
})();























