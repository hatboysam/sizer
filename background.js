var maxWidth = window.screen.availWidth;
var maxHeight = window.screen.availHeight;
var leftBlock = window.screen.availLeft;
var rightBlock = window.screen.availRight;
var topBlock = window.screen.availTop;

function leftHalf() {
    resizeScreen(1.0, 0.5, true);
}

function rightHalf() {
    resizeScreen(1.0, 0.5, false);
}

function fullScreen() {
    resizeScreen(1.0, 1.0, true);
}

function resizeScreen(vFrac, hFrac, alignLeft) {
    var newWidth = hFrac * maxWidth;
    var newHeight = vFrac * maxHeight;
    
    var leftPos = alignLeft ? 0 : (maxWidth - newWidth);
    
    var updateInfo = {
        left: Math.round(leftBlock + leftPos),
        top: Math.round(0),
        width: Math.round(newWidth),
        height: Math.round(newHeight)
    };
 
    chrome.windows.getCurrent(function(window) {
        console.log(window);   
        chrome.windows.update(window.id, updateInfo);
    });
    
    //window.close();
}

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
  if (command === "window-left") {
      leftHalf();
  } else if (command === "window-right") {
      rightHalf();
  } else if (command === "window-full") {
      fullScreen();
  }
});