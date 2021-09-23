var viewScores = document.querySelector("#viewScores");
var clear = document.querySelector("#clear");
var Back = document.querySelector("#backLink");

clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
  for (var i = 0; i < allScores.length; i++) {
    var createLi = document.createElement("li");
    createLi.textContent = allScores[i].initials + " " + allScores[i].score;
    viewScores.appendChild(createLi);
  }
}
backLink.addEventListener("click", function () {
  window.location.replace("./index.html");
});
