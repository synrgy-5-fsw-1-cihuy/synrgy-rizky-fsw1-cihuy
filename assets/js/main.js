window.addEventListener("load", function (e) {
    var container = document.querySelector(".scroll_container");
    var middle =
        container.children[Math.floor((container.children.length - 1) / 2)];
    container.scrollLeft =
        middle.offsetLeft +
        middle.offsetWidth / 2 -
        container.offsetWidth / 2;
});

const buttonRight = document.getElementById("next");
const buttonLeft = document.getElementById("prev");

buttonRight.onclick = function () {
    console.log("next");
    document.getElementById("scroll_container").scrollLeft += 300;
};
buttonLeft.onclick = function () {
    console.log("prev");
    document.getElementById("scroll_container").scrollLeft -= 300;
};