

document.addEventListener("DOMContentLoaded", function () {
  fetch("./deleveryFeatures.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("deleveryFeatures").innerHTML = data;
    })
    .catch((error) => console.error("deleveryFeatures load failed:", error));
});
