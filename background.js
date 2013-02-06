function fullScreen() {
	resize(0.0,1.0);
}

function leftHalf() {
	resize(0.0,0.5);
}

function rightHalf() {
	resize(0.5,0.5);
}

function resize(leftFactor,widthFactor) {
	chrome.windows.getCurrent(function(wind) {
		var maxWidth = window.screen.availWidth;
	  	var maxHeight = window.screen.availHeight;
	  	var newWidth = maxWidth * widthFactor;
	  	var updateInfo = {
	    	left: maxWidth * leftFactor,
	    	top: 0,
	    	width: newWidth,
	    	height: maxHeight
	  	};
	    chrome.windows.update(wind.id, updateInfo);
	});
	window.close();
}

$(document).ready(function() {
	$('#full').click(fullScreen);
	$('#left').click(leftHalf);
	$('#right').click(rightHalf);
});