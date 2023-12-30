window.onload = function () {
    var savedUrl = localStorage.getItem('savedWebsiteUrl');
    if (savedUrl) {
        // Display loading spinner
        document.getElementById('loadingSpinner').style.display = 'block';

        // Redirect after a short delay (simulating loading)
        setTimeout(function () {
            window.location.href = savedUrl;
        }, 0.001);
    } else {
        // Redirect to EnterURL.html if no URL is available
        window.location.href = 'enter-url.html';
    }
};