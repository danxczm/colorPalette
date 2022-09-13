import { titleEL, titleChanges } from "./textOppositeColor.js";
import { colors } from "./colors.js";

const paletteContainer = document.querySelector(".js-palette");
const paletteCreator = paletteCreatorMarkup(colors);
paletteContainer.insertAdjacentHTML("beforeend", paletteCreator);

function paletteCreatorMarkup(colors) {
  return colors
    .map(
      ({ hex, rgb }) =>
        `<div class="color-card">
		<div
		class="color-swatch"
    data-hex="${hex}"
    data-rgb="${rgb}"
    style="background-color: ${hex}"
    ></div>
    <div class="color-meta">
		<p>HEX: ${hex}</p>
		<p>RGB: ${rgb}</p>
    </div>
		</div>`
    )
    .join(" ");
}

paletteContainer.addEventListener("click", onColorCLick);

function onColorCLick(e) {
  const isSwitch = e.target.classList.contains("color-swatch");
  if (!isSwitch) {
    return;
  }
  const colorSwitchEl = e.target;

  removeActiveCardClass();
  addActiveCardClass(colorSwitchEl);
  changeBackgroundColor(colorSwitchEl);
  titleChanges(titleEL, colorSwitchEl);
}

function removeActiveCardClass() {
  const colorClassCheck = document.querySelector(".color-card.is-active");

  if (colorClassCheck) {
    colorClassCheck.classList.remove("is-active");
  }
}

function addActiveCardClass(targetEl) {
  const colorSwitchParent = targetEl.closest(".color-card");
  colorSwitchParent.classList.add("is-active");
}

function changeBackgroundColor(colorSwitchEl) {
  document.body.style.backgroundColor = colorSwitchEl.dataset.hex;
}
