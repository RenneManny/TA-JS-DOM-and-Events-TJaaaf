document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector("button");
  
    btn.addEventListener("click", function () {
      chrome.tabs.create({ url: "https://www.chatgpt.com/" });
    });
  });
  