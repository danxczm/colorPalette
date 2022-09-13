import invertColor from "./invertRandomColor.js";

const titleEL = document.querySelector(".title");

function titleChanges(titleEL, colorSwitchEl) {
  titleEL.innerHTML = "Love it!";

  if (colorSwitchEl.dataset.hex == "#3f51b5") {
    titleEL.innerHTML = "SLAVA";
  }

  if (colorSwitchEl.dataset.hex == "#ffeb3b") {
    titleEL.innerHTML = "UKRAINI!";
  }

  titleEL.style.color = invertColor(colorSwitchEl.dataset.hex);
}

export { titleEL, titleChanges };
