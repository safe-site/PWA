function saveAndRedirect() {
    var websiteUrl = document.getElementById('websiteInput').value;
    if (isValidUrl(websiteUrl)) {
        localStorage.setItem('savedWebsiteUrl', websiteUrl);
        window.location.href = websiteUrl;
    } else {
        alert('Please enter a valid URL');
    }
}

function isValidUrl(url) {
    var pattern = /^(http|https):\/\/[^ "]+$/;
    return pattern.test(url);
}

window.onload = function () {
    var savedUrl = localStorage.getItem('savedWebsiteUrl');
    if (savedUrl) {
        window.location.href = savedUrl;
    }
};