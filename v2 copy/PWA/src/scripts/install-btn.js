let deferredPrompt;
let appInstalled = false;

// Function to display the install button
const displayInstallButton = () => {
  const installButton = document.getElementById('installButton');
  installButton.style.display = 'block';
};

// Event listener for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior to avoid showing the browser's install prompt
  event.preventDefault();

  // Store the event for later use
  deferredPrompt = event;

  // Display your custom install button (or prompt) based on user interaction
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

// Additional logic to trigger the display of the install button based on user interaction
document.addEventListener('DOMContentLoaded', () => {
  // Example: Show the install button after the user clicks on a specific element
  document.getElementById('userInteractionElement').addEventListener('click', () => {
    if (!appInstalled) {
      displayInstallButton();
    }
  });
});
