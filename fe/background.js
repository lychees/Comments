var on = false;

function switchApp() {
  on = !on;
  if (on){
    chrome.browserAction.setIcon({path: "img/on.png"});
  }
  else{
    chrome.browserAction.setIcon({path: "img/off.png"});
  }
}

chrome.browserAction.onClicked.addListener(switchApp);
switchApp();
