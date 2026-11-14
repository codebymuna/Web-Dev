const trigger = document.getElementById("trigger");
const target = document.getElementById("target");

trigger.addEventListener("mouseover", function() {
    target.setAttribute("src", "img/picB.jpg");
});

trigger.addEventListener("mouseout", function() {
    target.setAttribute("src", "img/picA.jpg");
});