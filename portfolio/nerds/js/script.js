var link = document.querySelector(".btn-popup");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".btn-close");
var uName = popup.querySelector("[name=name]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  uName.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});
