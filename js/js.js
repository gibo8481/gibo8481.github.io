var container = document.getElementById("container");
var volumeDisplay = document.getElementById("volumeDisplay");

var circles = [];

// Generate circles

for (var i = 0; i < 101; i++) {
    var circle = document.createElement("div");
    circle.classList.add("circle");
    circle.textContent = i;
    circle.style.left = Math.random() * 500 + "px";
    circle.style.top = Math.random() * 500 + "px";


    // Add click event listener to each circle
    circle.addEventListener("click", function() {
    var value = this.textContent;
    volumeDisplay.textContent = 'Volume: ' + value;
    });


    container.appendChild(circle);
    circles.push(circle);
}

// Move circles randomly
function moveCircles() {
circles.forEach(function(circle) {
    var x = Math.random() * (window.innerWidth - circle.offsetWidth);
    var y = Math.random() * (window.innerHeight - circle.offsetHeight);
    circle.style.left = x + "px";
    circle.style.top = y + "px";
});
}

// Move circles every 2 seconds
setInterval(moveCircles, 2000);