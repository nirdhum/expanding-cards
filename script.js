// add and remove class using listner

const panels = document.querySelectorAll(".panel");

panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    removeAvtiveClasses();
    panel.classList.add("active");
  });
});

function removeAvtiveClasses() {
  panels.forEach(function (panel) {
    panel.classList.remove("active");
  });
}
