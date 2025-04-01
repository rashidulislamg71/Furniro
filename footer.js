document.addEventListener("DOMContentLoaded", function () {
  // Load Footer
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Footer load failed:", error));
});
