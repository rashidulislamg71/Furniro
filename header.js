

document.addEventListener("DOMContentLoaded", function(){

    // Load Header
    fetch("./header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    })
    .catch((error) => console.error("Header load failed:", error));
});