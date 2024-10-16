const box = document.querySelector(".box");
const container = document.querySelector(".container");
let boxPosition = { top: 0, left: 0 }; // Initial position of the box
const moveDistance = 10; // Move by 10px with each arrow key press

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      if (boxPosition.top > 0) {
        boxPosition.top -= moveDistance;
      }
      break;
    case "ArrowDown":
      if (boxPosition.top < container.clientHeight - box.clientHeight) {
        boxPosition.top += moveDistance;
      }
      break;
    case "ArrowLeft":
      if (boxPosition.left > 0) {
        boxPosition.left -= moveDistance;
      }
      break;
    case "ArrowRight":
      if (boxPosition.left < container.clientWidth - box.clientWidth) {
        boxPosition.left += moveDistance;
      }
      break;
  }

  box.style.top = `${boxPosition.top}px`;
  box.style.left = `${boxPosition.left}px`;
});
