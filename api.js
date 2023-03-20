// API: Application Programming Interface, where two systems meet and communicate

// Web API: Reach out to webservices to fetch data

// Example: DOM -- document.getElementByID
// Browser Geolocation -- Geolocation.getCurrentPosition()

// AJAX: Asynchronus Javascript and XML -- The technology within the browser that allows for API requests through JS



(function () {

    fetch("https://grandcircusco.github.io/demo-apis/donuts/1.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.name);
        console.log(data.extras);
        console.log(data.photo);
    });






}());