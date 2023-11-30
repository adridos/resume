const workBoxes = document.querySelectorAll(".work-box");
workBoxes.forEach((workBox) => {
  workBox.addEventListener("click", () => {
    const id = workBox.getAttribute("id");
    const overlay = document.querySelector(`#${id}-overlay`);
    overlay.style.display = "block";
  });
});

const closeButtons = document.querySelectorAll(".close-button");
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    const overlay = closeButton.closest(".overlay");
    overlay.style.display = "none";
  });
});
