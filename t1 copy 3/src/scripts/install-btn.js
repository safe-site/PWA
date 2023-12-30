let displayCount = 0;
const maxDisplayCount = 3; // Set a maximum number of displays

// Check if the app is installable
if (deferredPrompt) {
  const installButton = document.getElementById('installButton');

  // Function to display the install button
  const displayInstallButton = () => {
    installButton.style.display = 'block';
    displayCount++;
  };

  // Handle the install button click
  installButton.addEventListener('click', () => {
    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      // Reset the display count and hide the install button if the user accepted
      if (choiceResult.outcome === 'accepted') {
        displayCount = 0;
        installButton.style.display = 'none';
      }

      // Reset the deferredPrompt for the next time it's triggered
      deferredPrompt = null;
    });
  });

  // Display the install button up to maxDisplayCount times
  const displayInterval = setInterval(() => {
    if (displayCount < maxDisplayCount) {
      displayInstallButton();
    } else {
      clearInterval(displayInterval);
    }
  }, 5000); // Adjust the interval as needed (e.g., every 5 seconds)
}