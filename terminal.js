
console.log("Loading Entries...");
// Check if the script has already run during the session
if (!sessionStorage.getItem('hasRun')) {

document.addEventListener('DOMContentLoaded', function() {
  const terminalTextElement = document.getElementById('terminal-text');
  const mainContent = document.getElementById('main-content');

  const terminalMessages = [
    "Initializing...\n",
    "VACO Entries..\n",
    "Reading Token...\n",
    "Access Level 2...\n",
    "Granted Permissions... Logged as #0153\n",
    "Connecting to server...\n",
    "Loading resources...\n",
    "Please hold on...\n",
    "Loading main content...\n",
    "Rendering Recieved Data... \n",
    "VACO Entries - For Tanks, And Beyond. \n",
    "206 ANOMALIES reported, 157 screenshotted and 52 documented."
  ];

  let messageIndex = 0;
  let currentMessage = '';
  let typingInterval;

  function typeMessage() {
    if (messageIndex < terminalMessages.length) {
      currentMessage += terminalMessages[messageIndex];
      terminalTextElement.textContent = currentMessage;
      messageIndex++;

      if (messageIndex < terminalMessages.length) {
        typingInterval = setTimeout(typeMessage, 135);
      } else {
        setTimeout(() => {
          document.getElementById('terminal').style.display = 'none';
          //mainContent.style.display = 'block';
        }, 1000);
      }
    }
  }
  typeMessage();
});
    sessionStorage.setItem('hasRun', 'true');
} else {
  document.getElementById('terminal').style.display = 'none';
}
