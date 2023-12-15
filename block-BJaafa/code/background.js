chrome.runtime.onInstalled.addListener(function () {
    console.log("ChatGPT Opener Extension Installed");
  });
  
  chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ url: "https://www.chatgpt.com/" });
  });
  