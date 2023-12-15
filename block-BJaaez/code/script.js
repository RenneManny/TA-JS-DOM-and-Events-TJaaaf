document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('#openChatGPT');
  
    // Function to open ChatGPT
    function openGPT() {
      chrome.tabs.create({ url: 'https://www.chatgpt.com/' });
    }
  
    // Add click event listener to the button
    btn.addEventListener('click', openGPT);
  });
  
