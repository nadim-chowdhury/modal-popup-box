let open = document.getElementById("open");
let close = document.getElementById("close");
let modal = document.getElementById("modal");

open.addEventListener("click", () => {
  modal.style.opacity = 1;
  modal.style.transition = "0.5s";
});

close.addEventListener("click", () => {
  modal.style.opacity = 0;
});
