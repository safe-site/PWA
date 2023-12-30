let deferredPrompt; // Declare the variable
let displayCount = 0;
let appInstalled = false;

// Function to display the install button
const displayInstallButton = () => {
  const installButton = document.getElementById('installButton');
  installButton.style.display = 'block';
  displayCount++;
  setTimeout(() => {
    installButton.style.display = 'none';
  }, 3000); // Display the button for 3 seconds
};

// Event listener for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior to avoid showing the browser's install prompt
  event.preventDefault();

  // Store the event for later use
  deferredPrompt = event;

  // Display your custom install button
  displayInstallButton();
});

// Handle the install button click
document.getElementById('installButton').addEventListener('click', () => {
  // Show the install prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    // Reset the deferredPrompt for the next time it's triggered
    deferredPrompt = null;

    // Check if the user accepted and set appInstalled to true
    if (choiceResult.outcome === 'accepted') {
      appInstalled = true;
      document.getElementById('installButton').style.display = 'none';
    }
  });
});

// Display the install button every 10 seconds until the app is installed
const displayInterval = setInterval(() => {
  if (!appInstalled) {
    displayInstallButton();
  } else {
    clearInterval(displayInterval);
  }
}, 10000); // Display every 10 seconds
